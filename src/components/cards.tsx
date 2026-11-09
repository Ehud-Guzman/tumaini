import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";
import { type Article, type Program, type Project, formatDate, givingLevels, impactStats } from "@/data/content";
import { type Event, eventDate } from "@/data/events";
import { ButtonLink, Icon, Visual } from "./ui";

const iconTone = {
  teal: "bg-teal text-white",
  clay: "bg-clay text-white",
  gold: "bg-gold text-teal-deep",
} as const;

export function ProgramCard({ p }: { p: Program }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
      <Visual photo={p.photo} tone={p.tone} label={p.title} ratio="aspect-[16/10]" className="rounded-none" creditSide="right" sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />
      <div className="relative flex flex-1 flex-col p-7 pt-9">
        <span className={`absolute -top-7 left-7 grid h-14 w-14 place-items-center rounded-2xl shadow-md ${iconTone[p.tone]}`}><Icon name={p.icon} /></span>
        <h3 className="text-2xl">{p.title}</h3>
        <p className="mt-3 flex-1 text-ink-soft">{p.summary}</p>
        <Link href={`/programs/${p.slug}`} className="mt-5 inline-flex min-h-11 items-center font-semibold text-teal underline-offset-4 after:absolute after:inset-0 group-hover:underline">
          Learn more<span className="sr-only"> about {p.title}</span> <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
      <Visual tone={p.tone} photo={p.photo} label={p.title} ratio="aspect-[16/10]" className="rounded-none" sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className={`rounded-full px-3 py-0.5 font-semibold ${p.status === "Ongoing" ? "bg-[#d5e6e5] text-teal-deep" : "bg-sand text-ink-soft"}`}>{p.status}</span>
          <span className="text-ink-soft">{p.location}</span>
        </div>
        <h3 className="mt-3 text-xl">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 hover:underline">{p.title}</Link>
        </h3>
        <p className="mt-2 text-ink-soft">{p.summary}</p>
        <p className="mt-4 text-sm font-semibold text-clay-deep">{p.beneficiaries.toLocaleString("en-KE")} people reached (sample)</p>
      </div>
    </article>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
      <Visual tone={a.tone} photo={a.photo} label={a.title} ratio="aspect-[16/9]" className="rounded-none" sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />
      <div className="p-6">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-clay-deep">{a.category}</span> · <time dateTime={a.date}>{formatDate(a.date)}</time>
        </p>
        <h3 className="mt-2 text-xl">
          <Link href={`/news/${a.slug}`} className="after:absolute after:inset-0 hover:underline">{a.title}</Link>
        </h3>
        <p className="mt-2 text-ink-soft">{a.excerpt}</p>
      </div>
    </article>
  );
}

const kindStyle: Record<Event["kind"], string> = {
  Fundraiser: "bg-clay text-white",
  Volunteer: "bg-teal text-white",
  Community: "bg-gold text-teal-deep",
  Campaign: "bg-teal-deep text-white",
};

/** Calendar-style date badge. */
export function DateBadge({ iso, className = "" }: { iso: string; className?: string }) {
  const d = eventDate(iso);
  return (
    <div className={`grid h-16 w-16 place-content-center rounded-2xl bg-white text-center shadow-md ${className}`} aria-hidden="true">
      <span className="font-serif text-2xl font-semibold leading-none text-teal-deep">{d.day}</span>
      <span className="mt-0.5 text-xs font-bold uppercase tracking-wider text-clay-deep">{d.month}</span>
    </div>
  );
}

export function EventCard({ e, past = false }: { e: Event; past?: boolean }) {
  const d = eventDate(e.start);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
      <div className="relative">
        <Visual tone={e.tone} photo={e.photo} label={e.title} ratio="aspect-[16/10]" className={`rounded-none ${past ? "grayscale-[35%]" : ""}`} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" />
        <DateBadge iso={e.start} className="absolute left-4 top-4" />
        <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${kindStyle[e.kind]}`}>{past ? "Past event" : e.kind}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">
          <Link href={`/events/${e.slug}`} className="after:absolute after:inset-0 hover:underline">{e.title}</Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-ink-soft">
          <span className="sr-only">Date: </span>{e.end ? "Starts " : ""}{d.full}<span aria-hidden="true"> · </span><br className="sm:hidden" />{e.time}
        </p>
        <p className="mt-3 flex-1 text-ink-soft">{e.summary}</p>
        <p className="mt-4 text-sm text-ink-soft"><span className="font-semibold text-teal-deep">{e.location}</span></p>
      </div>
    </article>
  );
}

/** Large hero card for the next upcoming event. */
export function FeaturedEvent({ e }: { e: Event }) {
  const d = eventDate(e.start);
  return (
    <article className="relative grid overflow-hidden rounded-3xl bg-teal-deep text-white shadow-xl lg:grid-cols-2">
      <div className="relative min-h-72 lg:min-h-full">
        <Image src={photos[e.photo].src} alt={photos[e.photo].alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-2.5 py-0.5 text-[11px] text-white">Photo: {photos[e.photo].author} · {photos[e.photo].license}</span>
        <DateBadge iso={e.start} className="absolute left-5 top-5 h-20 w-20" />
      </div>
      <div className="p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">{e.featured ? "Featured" : "Next up"} · {e.kind}</p>
        <h3 className="mt-3 text-3xl text-white sm:text-4xl">{e.title}</h3>
        <p className="mt-3 font-medium text-white/90">{d.full} · {e.time}</p>
        <p className="text-white/80">{e.location}</p>
        <p className="mt-5 text-lg text-white/90">{e.summary}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/events/${e.slug}`}>Details &amp; RSVP</ButtonLink>
          <ButtonLink href="/support-us" variant="light">Give instead</ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function GiveHope({ id }: { id?: string }) {
  return (
    <div id={id}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {givingLevels.map((g) => (
          <li key={g.amount} className="flex flex-col rounded-2xl border border-line bg-white p-7 text-center transition-shadow hover:shadow-lg">
            <p className="font-serif text-3xl font-semibold text-clay-deep">{g.amount}</p>
            <h3 className="mt-2 text-lg">{g.title}</h3>
            <p className="mt-2 flex-1 text-ink-soft">{g.impact}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-center text-sm text-ink-soft">Sample giving levels. Real amounts and what they fund are confirmed by the organisation.</p>
      <div className="mt-6 text-center"><ButtonLink href="/support-us#ways">Choose how to give</ButtonLink></div>
    </div>
  );
}

export function StatsStrip({ limit }: { limit?: number }) {
  const stats = limit ? impactStats.slice(0, limit) : impactStats;
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="bg-teal-deep p-6 text-center">
          <dd className="font-serif text-4xl font-semibold text-gold sm:text-5xl">{s.value}</dd>
          <dt className="mt-2 text-sm text-white/85">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
