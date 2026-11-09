import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { events, eventDate, upcomingEvents } from "@/data/events";
import { EnquiryForm } from "@/components/EnquiryForm";
import { EventCard } from "@/components/cards";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = events.find((x) => x.slug === slug);
  if (!e) return {};
  return { title: e.title, description: e.summary, alternates: { canonical: `/events/${e.slug}` } };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const e = events.find((x) => x.slug === slug);
  if (!e) notFound();

  const isPast = (e.end ?? e.start) < new Date().toISOString().slice(0, 10);
  const needsRsvp = !isPast && e.cta.href === "#rsvp";
  const d = eventDate(e.start);
  const others = upcomingEvents().filter((x) => x.slug !== e.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    description: e.summary,
    startDate: e.start,
    ...(e.end ? { endDate: e.end } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: e.location, address: { "@type": "PostalAddress", addressCountry: "KE" } },
    organizer: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <PageHero photo={e.photo} position="object-[50%_45%]" eyebrow={isPast ? "Past event" : e.kind} title={e.title} intro={e.summary} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="space-y-4 text-lg text-ink-soft">
              {e.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            {e.recap && (
              <p className="rounded-2xl border-l-4 border-clay bg-sand p-5 text-lg text-ink"><strong>What happened: </strong>{e.recap}</p>
            )}
            <div>
              <h2 className="text-2xl">{isPast ? "Highlights" : "What to expect"}</h2>
              <ul className="mt-4 space-y-3">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-clay" /><span>{h}</span></li>
                ))}
              </ul>
            </div>
            {needsRsvp && (
              <div id="rsvp" className="scroll-mt-32">
                <h2 className="mb-5 text-2xl">Reserve your place</h2>
                <EnquiryForm variant="event" />
              </div>
            )}
          </div>

          <aside className="h-fit space-y-6 rounded-2xl bg-sand p-7 lg:sticky lg:top-32" aria-label="Event details">
            <dl className="space-y-4">
              <div><dt className="text-sm font-semibold text-ink-soft">Date</dt><dd>{e.end ? `${d.full} to ${eventDate(e.end).full}` : d.full}</dd></div>
              <div><dt className="text-sm font-semibold text-ink-soft">Time</dt><dd>{e.time}</dd></div>
              <div><dt className="text-sm font-semibold text-ink-soft">Where</dt><dd>{e.location}</dd></div>
              <div><dt className="text-sm font-semibold text-ink-soft">Type</dt><dd>{e.kind}</dd></div>
            </dl>
            {!isPast && (
              <ButtonLink href={e.cta.href} className="w-full">{e.cta.label}</ButtonLink>
            )}
            {!isPast && e.cta.href === "#rsvp" && (
              <ButtonLink href="/support-us" variant="outline" className="w-full">Can&apos;t attend? Give instead</ButtonLink>
            )}
            <Link href="/events" className="inline-block font-semibold text-teal underline underline-offset-4">← All events</Link>
          </aside>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tint labelledBy="more-h">
          <SectionHeading id="more-h" title="More ways to join in" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => <EventCard key={o.slug} e={o} />)}
          </div>
        </Section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
