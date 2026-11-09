import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programs, projects } from "@/data/content";
import { ProjectCard } from "@/components/cards";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/programs/${p.slug}` } };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-clay" /><span>{i}</span></li>
      ))}
    </ul>
  );
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  const related = projects.filter((x) => x.program === p.title);

  return (
    <>
      <PageHero photo={p.photo} position="object-[50%_40%]" eyebrow="Program" title={p.title} intro={p.summary} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <p className="text-lg text-ink-soft">{p.description}</p>
            <div><h2 className="text-2xl">Objectives</h2><List items={p.objectives} /></div>
            <div><h2 className="text-2xl">Key activities</h2><List items={p.activities} /></div>
            <div><h2 className="text-2xl">Achievements</h2><List items={p.achievements} /></div>
          </div>
          <aside className="h-fit space-y-6 rounded-2xl bg-sand p-7" aria-label="Program facts">
            <div><h2 className="text-lg">Who benefits</h2><p className="mt-1 text-ink-soft">{p.beneficiaries}</p></div>
            <div><h2 className="text-lg">Where we work</h2><p className="mt-1 text-ink-soft">{p.coverage}</p></div>
            <ButtonLink href="/get-involved" className="w-full">Get involved</ButtonLink>
          </aside>
        </div>
      </Section>
      {related.length > 0 && (
        <Section tint labelledBy="rel-h">
          <SectionHeading id="rel-h" title="Related projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <div key={r.slug} className="relative"><ProjectCard p={r} /></div>)}
          </div>
        </Section>
      )}
    </>
  );
}
