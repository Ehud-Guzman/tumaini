import type { Metadata } from "next";
import { programs } from "@/data/content";
import { ProgramCard } from "@/components/cards";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Programs",
  description: "Education & scholarships, girls' empowerment and basic needs support.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero photo="walking" position="object-[50%_35%]" eyebrow="Our programs" title="Six ways we remove barriers" intro="From the classroom to the kitchen table, our programs work together so every child can learn, stay safe and thrive." />
      <Section>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => <ProgramCard key={p.slug} p={p} />)}
        </div>
      </Section>
    </>
  );
}
