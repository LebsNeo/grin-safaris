import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const DIR = "public/images";

const targets = process.argv.slice(2);

async function listPngs() {
  if (targets.length) return targets;
  const entries = await readdir(DIR);
  return entries.filter((f) => f.endsWith(".png")).map((f) => path.join(DIR, f));
}

async function convert(pngPath, { avif = true } = {}) {
  const base = pngPath.replace(/\.png$/i, "");
  const input = await sharp(pngPath).toBuffer();
  const webpPath = `${base}.webp`;
  const avifPath = `${base}.avif`;

  const tasks = [
    sharp(input).webp({ quality: 82 }).toFile(webpPath).then(() => webpPath),
  ];
  if (avif) {
    tasks.push(
      sharp(input).avif({ quality: 60, effort: 4 }).toFile(avifPath).then(() => avifPath),
    );
  }
  const out = await Promise.all(tasks);
  const sizes = await Promise.all([
    stat(pngPath),
    ...out.map((p) => stat(p)),
  ]);
  console.log(
    `${pngPath} (${kb(sizes[0].size)})  →  ` +
      out.map((p, i) => `${path.basename(p)} (${kb(sizes[i + 1].size)})`).join(" + "),
  );
}

function kb(n) {
  return `${Math.round(n / 1024)}KB`;
}

const files = await listPngs();
for (const f of files) {
  await convert(f, { avif: !process.env.WEBP_ONLY });
}
