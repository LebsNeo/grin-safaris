import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Pane = {
  src: string;
  alt: string;
  headline: string;
  body: string;
  align: "left" | "right";
};

const PANES: Pane[] = [
  {
    src: "/images/why-silent-1.webp",
    alt: "Close-up of a leopard at golden hour in Kruger, sharp eye contact",
    headline: "Animals don't flee silent vehicles.",
    body:
      "Diesel engines and exhaust trigger flight responses in the bush. With our electric drivetrain, you get closer than you ever could before — sometimes 10 metres from a feeding leopard.",
    align: "left",
  },
  {
    src: "/images/why-silent-2.webp",
    alt: "Photographer with a long lens leaning from the electric safari van, photographing elephants",
    headline: "Photographs that don't shake.",
    body:
      "No engine vibration, no diesel haze. Just stillness, light, and the animal. Bring your gear — we'll route for golden hour.",
    align: "right",
  },
  {
    src: "/images/why-silent-3.webp",
    alt: "Silhouette of the electric safari van against a dramatic Kruger sunset",
    headline: "True bush immersion.",
    body:
      "Hear the wingbeat of a hornbill. The clack of impala hooves. The settle of a herd. The bush has a soundtrack you've never heard over a Land Cruiser.",
    align: "left",
  },
];

export function WhySilentMatters() {
  return (
    <section id="why-silent-matters" className="bg-cream-soft pt-24 sm:pt-32 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-4">
              Why silent matters
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-forest-900 leading-[1.05]">
              Three reasons our guests say silent safaris feel completely
              different.
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-24 space-y-24 sm:space-y-40">
        {PANES.map((p, i) => (
          <Pane key={p.headline} pane={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Pane({ pane, index }: { pane: Pane; index: number }) {
  const textRight = pane.align === "right";
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <Reveal
          className={[
            "lg:col-span-7 relative",
            textRight ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[3/2] sm:aspect-[16/10] shadow-[0_30px_80px_-30px_rgba(10,24,16,0.45)]">
            <Image
              src={pane.src}
              alt={pane.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className={[
            "lg:col-span-5",
            textRight ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4",
          ].join(" ")}
        >
          <p className="font-display text-ochre text-5xl leading-none">
            0{index + 1}
          </p>
          <h3 className="mt-5 font-display text-3xl sm:text-4xl text-forest-900 leading-[1.1]">
            {pane.headline}
          </h3>
          <p className="mt-5 text-stone-text text-lg leading-relaxed">
            {pane.body}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
