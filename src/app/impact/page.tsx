import type { Metadata } from "next";
import { stories } from "@/data/content";
import { StatsStrip } from "@/components/cards";
import { Container, PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our impact",
  description: "Measurable results, beneficiary voices and annual reports.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <PageHero photo="community" position="object-[50%_60%]" eyebrow="Our impact" title="Results we can count, and stories we can trust" intro="We report what we have verified, and we protect the dignity of the people behind each number." />
      <section className="bg-teal-deep pb-16" aria-label="Key figures">
        <Container>
          <StatsStrip />
          <p className="mt-4 text-center text-sm text-white/65">Sample figures for demonstration only.</p>
        </Container>
      </section>

      <Section labelledBy="stories-h">
        <SectionHeading id="stories-h" eyebrow="Stories" title="Change in people's own words" />
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <figure key={s.name} className="rounded-2xl border border-line bg-white p-7">
              <blockquote className="font-serif text-lg leading-snug text-teal-deep">“{s.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-ink-soft"><strong className="text-ink">{s.name}</strong><br />{s.role}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tint labelledBy="reports-h">
        <SectionHeading id="reports-h" eyebrow="Transparency" title="Annual reports" intro="In a live build, signed-off PDF reports are listed here for download." />
        <ul className="space-y-3">
          {["Annual Impact Report 2025", "Annual Impact Report 2024"].map((r) => (
            <li key={r} className="flex items-center justify-between rounded-xl bg-white p-5">
              <span className="font-medium">{r} <span className="text-sm text-ink-soft">(sample)</span></span>
              <span className="text-sm text-ink-soft">PDF · placeholder</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
