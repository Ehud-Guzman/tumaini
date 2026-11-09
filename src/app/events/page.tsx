import type { Metadata } from "next";
import { pastEvents, spotlightEvents } from "@/data/events";
import { EventCard, FeaturedEvent, GiveHope } from "@/components/cards";
import { ButtonLink, Container, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events",
  description: "Fundraisers, volunteer days and community events. Join us and help give hope.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const [next, ...others] = spotlightEvents();
  const rest = others.sort((a, b) => a.start.localeCompare(b.start));
  const past = pastEvents();

  return (
    <>
      <PageHero
        photo="community"
        position="object-[50%_55%]"
        eyebrow="Events"
        title="Come together, give hope"
        intro="Fundraisers, volunteer days and community celebrations. Every event is a chance to meet the people you help and see where your support goes."
      />

      {next && (
        <Section labelledBy="next-h">
          <h2 id="next-h" className="sr-only">Next event</h2>
          <FeaturedEvent e={next} />
        </Section>
      )}

      {rest.length > 0 && (
        <Section tint labelledBy="upcoming-h">
          <SectionHeading id="upcoming-h" eyebrow="Mark your calendar" title="Upcoming events" intro="Join as a guest, a volunteer or a sponsor. Everyone is welcome." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((e) => <EventCard key={e.slug} e={e} />)}
          </div>
        </Section>
      )}

      <Section labelledBy="give-h">
        <SectionHeading id="give-h" eyebrow="Can't make it?" title="Give hope from wherever you are" intro="Not every supporter can attend. A gift of any size keeps a child learning." align="center" />
        <GiveHope />
      </Section>

      {past.length > 0 && (
        <Section tint labelledBy="past-h">
          <SectionHeading id="past-h" eyebrow="Looking back" title="Past events" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {past.map((e) => <EventCard key={e.slug} e={e} past />)}
          </div>
        </Section>
      )}

      <section className="bg-clay py-16 text-white sm:py-20" aria-labelledby="host-h">
        <Container className="text-center">
          <h2 id="host-h" className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">Want to host a fundraiser for us?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">Schools, churches, businesses and friends can organise a bake sale, a match or a dinner. We will give you the materials and support to get started.</p>
          <div className="mt-8"><ButtonLink href="/get-involved" variant="light">Tell us your idea</ButtonLink></div>
        </Container>
      </section>
    </>
  );
}
