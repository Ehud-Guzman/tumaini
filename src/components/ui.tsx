import Image from "next/image";
import Link from "next/link";
import type { Tone } from "@/data/content";
import { photos, type PhotoKey } from "@/data/photos";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Section({
  children,
  className = "",
  tint = false,
  id,
  labelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  tint?: boolean;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 sm:py-24 ${tint ? "bg-sand" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-soft">{intro}</p>}
    </div>
  );
}

const buttonStyles = {
  primary:
    "bg-clay text-white hover:bg-clay-deep",
  secondary:
    "bg-teal text-white hover:bg-teal-deep",
  outline:
    "border-2 border-teal text-teal hover:bg-teal hover:text-white",
  light:
    "bg-white text-teal-deep hover:bg-sand",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-semibold transition-colors ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  photo,
  position = "object-center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  photo?: PhotoKey;
  /** Tailwind object-position class, to choose which part of the photo shows. */
  position?: string;
}) {
  const p = photo ? photos[photo] : null;
  return (
    <div className="relative isolate overflow-hidden bg-teal-deep py-20 text-white sm:py-32">
      {p && (
        <>
          <Image src={p.src} alt="" fill priority sizes="100vw" className={`-z-20 object-cover ${position}`} />
          {/* Solid tint keeps white text above 4.5:1 contrast on any photo */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-teal-deep/70" />
          <span className="absolute bottom-2 right-3 z-10 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] text-white/90">
            Photo: {p.author} · {p.license}
          </span>
        </>
      )}
      <Container>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-white/90">{intro}</p>}
      </Container>
    </div>
  );
}

const toneBg: Record<Tone, string> = {
  teal: "bg-teal",
  clay: "bg-clay",
  gold: "bg-gold",
};
const toneSoft: Record<Tone, string> = {
  teal: "bg-[#d5e6e5]",
  clay: "bg-[#f1d9cc]",
  gold: "bg-[#f7e6c1]",
};

/**
 * Illustrated placeholder used instead of stock photography.
 * Real client builds replace this with <Image> of actual organisational photos
 * (with documented consent, especially where children appear).
 */
export function Visual({
  tone = "teal",
  label,
  className = "",
  ratio = "aspect-[4/3]",
  photo,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
  creditSide = "left",
}: {
  tone?: Tone;
  label: string;
  className?: string;
  ratio?: string;
  photo?: PhotoKey;
  priority?: boolean;
  sizes?: string;
  /** Which bottom corner holds the photo credit (use "right" when something overlaps the left). */
  creditSide?: "left" | "right";
}) {
  if (photo) {
    const p = photos[photo];
    return (
      <figure className={`relative overflow-hidden rounded-2xl bg-sand ${ratio} ${className}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover" />
        <figcaption className={`absolute bottom-2 ${creditSide === "right" ? "right-2 max-w-[60%]" : "left-2 max-w-[calc(100%-1rem)]"} truncate rounded-full bg-black/65 px-2.5 py-0.5 text-[11px] text-white`}>
          Photo: {p.author} · {p.license}
        </figcaption>
      </figure>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Placeholder illustration: ${label}`}
      className={`relative overflow-hidden rounded-2xl ${toneSoft[tone]} ${ratio} ${className}`}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <circle cx="320" cy="70" r="46" className={`fill-current ${tone === "gold" ? "text-clay" : "text-gold"}`} opacity="0.9" />
        <path d="M0 300 L0 200 Q90 130 180 200 T400 170 L400 300Z" className={`fill-current ${tone === "gold" ? "text-clay" : "text-teal"}`} opacity="0.85" />
        <path d="M0 300 L0 245 Q120 190 230 245 T400 235 L400 300Z" className="fill-current text-teal-deep" opacity="0.9" />
      </svg>
      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-soft">
        Sample image
      </span>
    </div>
  );
}

export function ToneDot({ tone }: { tone: Tone }) {
  return <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rounded-full ${toneBg[tone]}`} />;
}

export type IconName = "book" | "spark" | "home" | "heart" | "tools" | "shield";

export function Icon({ name }: { name: IconName }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "book":
      return (<svg {...common}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 21V5" /><path d="M9 7h6" /></svg>);
    case "spark":
      return (<svg {...common}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 17v4M17 19h4" /></svg>);
    case "heart":
      return (<svg {...common}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>);
    case "tools":
      return (<svg {...common}><path d="M14.5 6.5a4 4 0 0 0-5 5L3 18l3 3 6.5-6.5a4 4 0 0 0 5-5l-2.5 2.5-2-.5-.5-2z" /></svg>);
    case "shield":
      return (<svg {...common}><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>);
    default:
      return (<svg {...common}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>);
  }
}
