import type { Metadata } from "next";
import { team, values } from "@/data/content";
import { PageHero, Section, SectionHeading, Visual } from "@/components/ui";

export const metadata: Metadata = {
  title: "About us",
  description: "Our story, mission, values, leadership and the places we work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero photo="reading" position="object-[50%_30%]" eyebrow="About us" title="A community-rooted organisation with a simple belief" intro="Hope grows when children can learn, girls can lead and families have what they need." />

      <Section labelledBy="story-h">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="story-h" title="Our story" />
            <div className="-mt-4 space-y-4 text-lg text-ink-soft">
              <p>Tumaini Outreach began as a small group of teachers and mothers paying school fees for neighbours&apos; children. Today we support scholars, girls&apos; clubs and families across several counties, while still deciding together with the communities we serve.</p>
              <p>This is a fictional organisation created for a website demonstration. In a real build, this page carries the organisation&apos;s actual history, founding date and registration details.</p>
            </div>
          </div>
          <Visual photo="trees" tone="gold" label="Pupils and community members planting a tree" />
        </div>
      </Section>

      <Section tint labelledBy="vm-h">
        <h2 id="vm-h" className="sr-only">Vision and mission</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8"><h3 className="text-2xl">Our vision</h3><p className="mt-3 text-lg text-ink-soft">A future where every girl and child in our communities learns, thrives and leads without barriers.</p></div>
          <div className="rounded-2xl bg-white p-8"><h3 className="text-2xl">Our mission</h3><p className="mt-3 text-lg text-ink-soft">To keep children in school, empower girls and meet basic needs through community-led, transparent and dignified support.</p></div>
        </div>
      </Section>

      <Section labelledBy="values-h">
        <SectionHeading id="values-h" eyebrow="What guides us" title="Our values" />
        <ul className="grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <li key={v.title} className="rounded-2xl border border-line bg-white p-7">
              <h3 className="text-xl">{v.title}</h3>
              <p className="mt-2 text-ink-soft">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tint labelledBy="team-h">
        <SectionHeading id="team-h" eyebrow="Leadership" title="The people behind the work" intro="Sample profiles. Staff photographs are published with their consent." />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <li key={t.name} className="rounded-2xl bg-white p-6 text-center">
              <span aria-hidden="true" className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-teal font-serif text-2xl text-white">{t.name[0]}</span>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-sm text-ink-soft">{t.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="legal-h">
        <SectionHeading id="legal-h" eyebrow="Accountability" title="Registration and governance" />
        <dl className="grid gap-4 rounded-2xl border border-line bg-white p-7 sm:grid-cols-2">
          <div><dt className="text-sm font-semibold text-ink-soft">Legal status</dt><dd>Registered NGO (sample: registration number to be supplied)</dd></div>
          <div><dt className="text-sm font-semibold text-ink-soft">Areas of operation</dt><dd>Kisumu, Siaya and Homa Bay counties (sample)</dd></div>
          <div><dt className="text-sm font-semibold text-ink-soft">Board</dt><dd>Independent board meets quarterly (sample)</dd></div>
          <div><dt className="text-sm font-semibold text-ink-soft">Annual reports</dt><dd>Published on the Impact page (sample)</dd></div>
        </dl>
      </Section>
    </>
  );
}
