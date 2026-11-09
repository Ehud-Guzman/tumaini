import type { Metadata } from "next";
import { projects } from "@/data/content";
import { ProjectCard } from "@/components/cards";
import { PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Ongoing and completed projects, with locations, timelines and results.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const completed = projects.filter((p) => p.status === "Completed");
  return (
    <>
      <PageHero photo="school" position="object-[50%_55%]" eyebrow="Our projects" title="Proof of work, project by project" intro="Every project has its own record of objectives, activities and results." />
      <Section labelledBy="ongoing-h">
        <SectionHeading id="ongoing-h" title="Ongoing" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ongoing.map((p) => <div key={p.slug} className="relative"><ProjectCard p={p} /></div>)}
        </div>
      </Section>
      <Section tint labelledBy="done-h">
        <SectionHeading id="done-h" title="Completed" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {completed.map((p) => <div key={p.slug} className="relative"><ProjectCard p={p} /></div>)}
        </div>
      </Section>
    </>
  );
}
