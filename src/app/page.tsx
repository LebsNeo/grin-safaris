import Image from "next/image";
import Link from "next/link";
import { BRAND, whatsappUrl } from "@/lib/contact";
import { PartnerForm } from "@/components/PartnerForm";

export default function HomePage() {
  return (
    <main className="bg-cream-soft text-charcoal">
      <Nav />
      <Hero />
      <Vision />
      <Vehicle />
      <Tours />
      <BookOrPartner />
      <Footer />
    </main>
  );
}

/* ---------- nav ---------- */
function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight text-cream-soft drop-shadow-sm">
          Grin <span className="text-ochre-soft">Safaris</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-cream-soft/90">
          <a href="#vision" className="hover:text-cream-soft transition">The vision</a>
          <a href="#vehicle" className="hover:text-cream-soft transition">The vehicle</a>
          <a href="#tours" className="hover:text-cream-soft transition">Tours</a>
          <a href="#partner" className="hover:text-cream-soft transition">Partners</a>
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cream-soft/95 hover:bg-cream-soft text-forest-900 px-5 py-2.5 text-sm font-medium transition"
        >
          Book on WhatsApp
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="A dark green electric safari van beside a watering hole in Kruger at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 hero-fade" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 w-full">
          <p className="text-cream-soft/80 text-xs uppercase tracking-[0.32em] mb-5">
            Kruger National Park · South Africa
          </p>
          <h1 className="font-display text-cream-soft text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
            Electric safaris.<br />
            <span className="text-ochre-soft">Silent</span> by design.
          </h1>
          <p className="mt-7 max-w-xl text-base sm:text-lg text-cream-soft/85 leading-relaxed">
            A converted electric safari van. Zero emissions, zero engine noise —
            so the wildlife stays calm and you get closer than any diesel ever
            could.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream-soft hover:bg-white text-forest-900 px-7 py-4 text-sm sm:text-base font-medium tracking-wide transition"
            >
              Book a tour
              <span aria-hidden>→</span>
            </a>
            <a
              href="#partner"
              className="inline-flex items-center gap-2 rounded-full border border-cream-soft/40 hover:border-cream-soft/80 hover:bg-cream-soft/5 text-cream-soft px-7 py-4 text-sm sm:text-base font-medium tracking-wide transition"
            >
              Become a partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- vision ---------- */
function Vision() {
  const pillars = [
    {
      title: "Zero emissions",
      body: "A battery-electric drivetrain means no exhaust, no fumes, no diesel fingerprint left on the bushveld.",
    },
    {
      title: "Silent approach",
      body: "Without an idling combustion engine, animals don't flee at the sound of you arriving. They keep doing what they were doing.",
    },
    {
      title: "Premium, calm",
      body: "No vibration, no engine drone. Conversation stays low, wildlife stays close, the moment stays unbroken.",
    },
  ];

  return (
    <section id="vision" className="bg-cream-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            The vision
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-[1.05]">
            A safari that leaves nothing behind — except the memory of it.
          </h2>
          <p className="mt-7 text-stone-text text-lg leading-relaxed">
            Kruger is one of Earth's great wild places. We don't think it should
            smell like diesel. Grin Safaris is building South Africa's first
            fully electric guided safari fleet — purpose-built for conservation
            areas, designed for the kind of game viewing you can't have with a
            combustion engine.
          </p>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-10 sm:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-forest-200 pt-6">
              <h3 className="font-display text-2xl text-forest-900">
                {p.title}
              </h3>
              <p className="mt-3 text-stone-text leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- vehicle ---------- */
function Vehicle() {
  return (
    <section id="vehicle" className="bg-forest-900 text-cream-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.32em] text-ochre-soft mb-5">
              The vehicle
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Built for the bush.<br />
              Powered by daylight.
            </h2>
            <p className="mt-7 text-cream-soft/80 text-lg leading-relaxed">
              A converted van re-engineered as a fully electric, open-roof
              safari vehicle. Two tiered rows of leather captain seats. A raised
              viewing canopy. Solar-assisted charging at base camp.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
              <Spec k="Capacity" v="6 guests + guide" />
              <Spec k="Drivetrain" v="100% electric" />
              <Spec k="Range" v="Full-day game drive" />
              <Spec k="Launch" v="Q4 2026" />
            </dl>
            <p className="mt-10 inline-flex items-center gap-3 rounded-full border border-cream-soft/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream-soft/70">
              <span className="size-1.5 rounded-full bg-ochre-soft" />
              Pre-bookings open · launching Q4 2026
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden col-span-2 sm:col-span-1">
              <Image
                src="/images/exterior.png"
                alt="Electric safari van exterior in dark forest green"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden col-span-2 sm:col-span-1 sm:translate-y-10">
              <Image
                src="/images/interior.png"
                alt="Luxury safari van interior with leather captain seats"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-cream-soft/50 text-[11px] uppercase tracking-[0.2em]">
        {k}
      </dt>
      <dd className="mt-1 font-display text-xl text-cream-soft">{v}</dd>
    </div>
  );
}

/* ---------- tours ---------- */
function Tours() {
  const features = [
    "4-hour expert-guided game drive",
    "Sundowner stop with bushveld views",
    "Premium snacks & refreshments",
    "Maximum 6 guests per vehicle",
    "Silent electric safari van",
    "Local Kruger-certified guide",
  ];

  return (
    <section id="tours" className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            Tours
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-[1.05]">
            One tour. Every detail considered.
          </h2>
          <p className="mt-6 text-stone-text text-lg leading-relaxed">
            For our launch season we're running a single, intentionally curated
            experience. Small groups, expert guiding, no rush.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3 bg-forest-900 text-cream-soft rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 size-96 rounded-full bg-ochre/10 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.3em] text-ochre-soft">
              Signature experience
            </p>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 leading-tight">
              Guided Safari Tour
            </h3>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-display text-5xl sm:text-6xl">R2,000</span>
              <span className="text-cream-soft/70">per person</span>
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-cream-soft/90">
                  <svg
                    className="mt-1 size-4 shrink-0 text-ochre-soft"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8.5 12 15.3 5.3a1 1 0 0 1 1.4 0Z" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-cream-soft hover:bg-white text-forest-900 px-7 py-3.5 text-sm font-medium transition"
            >
              Book on WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-6">
            <Card title="Half-day & full-day options" body="Custom durations available on request — talk to us via WhatsApp." />
            <Card title="Multi-day overnight" body="Bespoke multi-day itineraries with lodge partners. Quote on request." />
            <Card title="Private charters" body="Whole-vehicle bookings for families, photographers, and small groups." />
          </aside>
        </div>

        <p className="mt-10 text-xs text-stone-muted">
          *R2,000 per person reflects our launch-season half-day rate. Full-day
          and overnight pricing on request.
        </p>
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-cream-soft rounded-2xl p-7 border border-forest-100">
      <h4 className="font-display text-xl text-forest-900">{title}</h4>
      <p className="mt-2 text-stone-text leading-relaxed text-sm">{body}</p>
    </div>
  );
}

/* ---------- book / partner ---------- */
function BookOrPartner() {
  return (
    <section id="partner" className="bg-forest-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            Travellers
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-900 leading-[1.05]">
            Book your tour.
          </h2>
          <p className="mt-6 text-stone-text text-lg leading-relaxed">
            The fastest way to confirm dates is on WhatsApp — we'll respond
            within a few hours, share availability, and answer anything about
            the experience.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-soft px-7 py-4 text-base font-medium transition"
          >
            <WhatsAppIcon className="size-5" />
            Message us on WhatsApp
          </a>
          <div className="mt-6 text-sm text-stone-text">
            Or email{" "}
            <a className="underline underline-offset-4" href={`mailto:${BRAND.email}`}>
              {BRAND.email}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            Tour operators & lodges
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-900 leading-[1.05]">
            Partner with us.
          </h2>
          <p className="mt-6 text-stone-text text-lg leading-relaxed">
            Lodges, agencies, and tour operators — get in touch about white-label
            game drives, group rates, and combined itineraries.
          </p>
          <div className="mt-10">
            <PartnerForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.81 11.81 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634L2.85 21.1l3.804-1.001zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.711.306 1.266.489 1.7.626.713.226 1.363.194 1.879.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-soft/70 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl text-cream-soft">
              Grin <span className="text-ochre-soft">Safaris</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Electric-powered, expert-guided safari tours in Kruger National
              Park. Premium, silent, sustainable.
            </p>
          </div>

          <div>
            <h4 className="text-cream-soft text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-cream-soft" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp · {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-cream-soft" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-soft text-sm font-medium mb-4">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="opacity-60">Instagram · soon</span></li>
              <li><span className="opacity-60">TikTok · soon</span></li>
              <li><span className="opacity-60">Facebook · soon</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-soft/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs">
          <p>© {new Date().getFullYear()} Grin Safaris. All rights reserved.</p>
          <p className="opacity-60">Kruger National Park · South Africa</p>
        </div>
      </div>
    </footer>
  );
}
