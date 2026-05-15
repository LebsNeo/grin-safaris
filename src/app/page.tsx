import Image from "next/image";
import Link from "next/link";
import { BRAND, whatsappUrl, whatsappLink } from "@/lib/contact";
import { PartnerForm } from "@/components/PartnerForm";
import { WhySilentMatters } from "@/components/WhySilentMatters";

export default function HomePage() {
  return (
    <main className="bg-cream-soft text-charcoal">
      <Nav />
      <Hero />
      <Vision />
      <WhySilentMatters />
      <Vehicle />
      <Tours />
      <Testimonials />
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
        <nav className="hidden md:flex items-center gap-8 text-sm text-cream-soft/90">
          <a href="#why-silent-matters" className="hover:text-cream-soft transition">Why silent</a>
          <a href="#vehicle" className="hover:text-cream-soft transition">The vehicle</a>
          <a href="#tours" className="hover:text-cream-soft transition">Tours</a>
          <a href="#guests" className="hover:text-cream-soft transition">Guests</a>
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
        src="/images/hero.webp"
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
            Hear the lion<br />
            <span className="text-ochre-soft">breathe.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base sm:text-lg text-cream-soft/85 leading-relaxed">
            Silent safaris in Kruger. Electric. Intimate. A premium guided
            experience, capped at six guests — so you get closer than any diesel
            engine ever will.
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
  return (
    <section id="vision" className="bg-cream-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            The vision
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-[1.05]">
            A safari you can hear.
          </h2>
          <p className="mt-7 text-stone-text text-lg leading-relaxed">
            Most game drives sound like a tractor. Ours sound like the bush. No
            engine drone, no diesel haze, no vibration — just the wildlife, the
            wind, and a guide speaking at conversation volume. Grin Safaris is
            building South Africa's first fully electric guided safari fleet,
            purpose-built for closer, calmer, more cinematic encounters in
            Kruger.
          </p>
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
                src="/images/exterior.webp"
                alt="Electric safari van exterior in dark forest green"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden col-span-2 sm:col-span-1 sm:translate-y-10">
              <Image
                src="/images/interior.webp"
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
type Pkg = {
  id: string;
  name: string;
  blurb: string;
  duration: string;
  group: string;
  price: string;
  priceNote?: string;
  features: string[];
  feature?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    id: "sundowner",
    name: "Silent Sundowner",
    blurb: "Golden-hour game drive into the magic hour — the busiest wildlife window of the day.",
    duration: "3.5 hours · 16:00 – 19:30",
    group: "Max 6 guests",
    price: "R2,800",
    priceNote: "or R3,500/pp private (2-pax)",
    features: [
      "Chilled MCC + bush canapé sundowner",
      "Prime predator-activity window",
      "Guided by a Kruger-certified ranger",
    ],
    feature: true,
  },
  {
    id: "morning",
    name: "Silent Morning",
    blurb: "Pre-dawn departure into the cool, photo-optimised hours when the bush is most alive.",
    duration: "5 hours · 05:30 – 10:30",
    group: "Max 6 guests",
    price: "R2,500",
    features: [
      "Breakfast picnic in the bush",
      "Photo-optimised pacing",
      "Best light of the day",
    ],
  },
  {
    id: "full-day",
    name: "Full-Day Silent Safari",
    blurb: "Sunrise to sunset across Kruger — the deepest, most unhurried game drive we run.",
    duration: "9 hours",
    group: "Max 6 guests",
    price: "R3,500",
    features: [
      "All meals included",
      "Multiple loop routes through Kruger",
      "Time for the unexpected",
    ],
  },
  {
    id: "photographer",
    name: "Photographer's Edit",
    blurb: "A full day re-shaped around long lenses, golden hour, and the patience real wildlife photography needs.",
    duration: "Full day · private charter",
    group: "Max 3 guests · min 2",
    price: "R5,500",
    priceNote: "per person · private vehicle",
    features: [
      "Long-lens-friendly seat layout",
      "Golden-hour priority routing",
      "Guide briefed on photographic intent",
    ],
  },
  {
    id: "lodge",
    name: "2D / 1N Silent Lodge Escape",
    blurb: "Two days of silent safari, with a night at a SANParks luxury cottage between them.",
    duration: "2 days · 1 night",
    group: "Max 6 guests",
    price: "R8,500",
    priceNote: "per person · sharing",
    features: [
      "SANParks luxury cottage stay",
      "Two full silent game drives",
      "All meals + park transfers included",
    ],
  },
];

function buildPkgMessage(p: Pkg) {
  return `Hi Grin Safaris — I'd like to book the ${p.name} (${p.price}${
    p.priceNote ? " " + p.priceNote.replace(/^or /, "/ ") : ""
  }). Please share availability and next steps.`;
}

function Tours() {
  return (
    <section id="tours" className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            Tours
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-[1.05]">
            Five ways to spend a day in silence.
          </h2>
          <p className="mt-6 text-stone-text text-lg leading-relaxed">
            Every package includes conservation fees, pickup within Hazyview /
            White River, and the silent electric van. Small groups, expert
            guiding, no rush.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 sm:gap-7">
          {PACKAGES.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>

        <CarbonReceipt />
      </div>
    </section>
  );
}

function PackageCard({ pkg: p }: { pkg: Pkg }) {
  const isFeature = p.feature;
  return (
    <article
      className={[
        "relative rounded-3xl p-8 flex flex-col",
        isFeature
          ? "bg-forest-900 text-cream-soft lg:row-span-2 lg:col-span-1 overflow-hidden"
          : "bg-cream-soft border border-forest-100 text-charcoal",
      ].join(" ")}
    >
      {isFeature && (
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-ochre/15 blur-3xl pointer-events-none" />
      )}

      <header className="relative">
        {isFeature && (
          <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-soft mb-3">
            Most booked
          </p>
        )}
        <h3
          className={[
            "font-display leading-tight",
            isFeature ? "text-3xl sm:text-4xl" : "text-2xl",
          ].join(" ")}
        >
          {p.name}
        </h3>
        <p
          className={[
            "mt-3 text-sm leading-relaxed",
            isFeature ? "text-cream-soft/80" : "text-stone-text",
          ].join(" ")}
        >
          {p.blurb}
        </p>
      </header>

      <dl className="relative mt-7 grid grid-cols-2 gap-x-5 gap-y-3 text-xs">
        <div>
          <dt
            className={[
              "uppercase tracking-[0.2em]",
              isFeature ? "text-cream-soft/50" : "text-stone-muted",
            ].join(" ")}
          >
            Duration
          </dt>
          <dd
            className={[
              "mt-1 text-sm",
              isFeature ? "text-cream-soft" : "text-charcoal",
            ].join(" ")}
          >
            {p.duration}
          </dd>
        </div>
        <div>
          <dt
            className={[
              "uppercase tracking-[0.2em]",
              isFeature ? "text-cream-soft/50" : "text-stone-muted",
            ].join(" ")}
          >
            Group
          </dt>
          <dd
            className={[
              "mt-1 text-sm",
              isFeature ? "text-cream-soft" : "text-charcoal",
            ].join(" ")}
          >
            {p.group}
          </dd>
        </div>
      </dl>

      <div
        className={[
          "relative mt-7 pt-6 border-t",
          isFeature ? "border-cream-soft/15" : "border-forest-100",
        ].join(" ")}
      >
        <div className="flex items-baseline gap-2">
          <span
            className={[
              "font-display",
              isFeature ? "text-5xl" : "text-4xl text-forest-900",
            ].join(" ")}
          >
            {p.price}
          </span>
          <span
            className={[
              "text-xs",
              isFeature ? "text-cream-soft/70" : "text-stone-muted",
            ].join(" ")}
          >
            per person
          </span>
        </div>
        {p.priceNote && (
          <p
            className={[
              "mt-1 text-xs",
              isFeature ? "text-cream-soft/60" : "text-stone-muted",
            ].join(" ")}
          >
            {p.priceNote}
          </p>
        )}
      </div>

      <ul className="relative mt-6 space-y-2.5 flex-1">
        {p.features.map((f) => (
          <li
            key={f}
            className={[
              "flex items-start gap-3 text-sm",
              isFeature ? "text-cream-soft/85" : "text-stone-text",
            ].join(" ")}
          >
            <svg
              className={[
                "mt-1 size-4 shrink-0",
                isFeature ? "text-ochre-soft" : "text-forest-600",
              ].join(" ")}
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
        href={whatsappLink(buildPkgMessage(p))}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "relative mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition",
          isFeature
            ? "bg-cream-soft hover:bg-white text-forest-900"
            : "bg-forest-800 hover:bg-forest-700 text-cream-soft",
        ].join(" ")}
      >
        Book on WhatsApp
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

function CarbonReceipt() {
  return (
    <aside className="mt-16 relative overflow-hidden rounded-3xl bg-forest-50 border border-forest-100 px-6 sm:px-10 py-10 sm:py-12">
      <div className="grid md:grid-cols-[auto,1fr,auto] gap-8 md:gap-10 items-center">
        <div className="relative size-20 sm:size-24 shrink-0 rounded-2xl bg-forest-900 text-cream-soft flex flex-col items-center justify-center">
          <span className="text-[9px] uppercase tracking-[0.2em] text-ochre-soft">
            CO₂
          </span>
          <span className="font-display text-2xl sm:text-3xl mt-0.5">0kg</span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-3">
            Your carbon receipt
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-forest-900 leading-tight">
            Every booking comes with a personal carbon receipt.
          </h3>
          <p className="mt-3 text-stone-text leading-relaxed max-w-2xl">
            A shareable card showing exactly how much CO₂ your safari{" "}
            <em>didn't</em> burn versus the same drive in a diesel vehicle. One
            tap to post — make your impact visible.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-soft px-6 py-3.5 text-sm font-medium transition whitespace-nowrap"
        >
          Book a Silent Safari
          <span aria-hidden>→</span>
        </a>
      </div>
    </aside>
  );
}

/* ---------- testimonials ---------- */
{/* TODO: replace with real reviews once vehicle is operational */}
const TESTIMONIALS = [
  {
    quote:
      "We were 10 metres from a leopard. She didn't even know we were there. Impossible in a diesel vehicle.",
    name: "Sarah M.",
    location: "London",
  },
  {
    quote:
      "The photos are different. No engine vibration, no diesel haze. Just the animal and the light.",
    name: "Marco D.",
    location: "Milan",
  },
  {
    quote:
      "First safari I've done where I could actually hear the bush. Game-changer.",
    name: "Lebogang K.",
    location: "Johannesburg",
  },
];

function Testimonials() {
  return (
    <section id="guests" className="bg-cream-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-forest-700 mb-5">
            What guests love
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-forest-900 leading-[1.05]">
            The silence is the experience.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* TODO: replace with real reviews once vehicle is operational */}
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-cream rounded-3xl p-8 flex flex-col border border-forest-100"
            >
              <svg
                className="size-7 text-ochre"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M9.5 7H6a4 4 0 0 0-4 4v6h6V11H6c0-.6.4-1 1-1h2.5V7zm10 0H16a4 4 0 0 0-4 4v6h6V11h-2c0-.6.4-1 1-1h2.5V7z" />
              </svg>
              <blockquote className="mt-5 font-display text-xl text-forest-900 leading-snug flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-stone-text">
                <span className="font-medium text-charcoal">{t.name}</span>{" "}
                <span className="text-stone-muted">· {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-xs text-stone-muted italic">
          Verified guest reviews coming once we launch in Q4 2026.
        </p>
      </div>
    </section>
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
            Tour operators & lodge partners
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-900 leading-[1.05]">
            Refer your guests.
          </h2>
          <p className="mt-6 text-stone-text text-lg leading-relaxed">
            We work with lodges and concierge teams across Hazyview and the
            wider Kruger gateway — Mdluli, Hippo Hollow, Hazyview Cabanas and
            others — on referral commissions of <strong>10–15%</strong> for
            confirmed bookings.
          </p>
          <p className="mt-3 text-sm text-stone-muted">
            Tour operators welcome too. Tell us about your guests and we'll come
            back with rates and terms.
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
              Silent, electric, expert-guided safari tours in Kruger National
              Park. Closer encounters, cleaner photography, true bush
              immersion.
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
