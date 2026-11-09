import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/content";
import type { PhotoKey } from "@/data/photos";
import { PageHero, Section, Visual } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` } };
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const all: PhotoKey[] = ["classroom", "girls", "walking", "tank", "trees", "assembly", "school"];
  const gallery = all.filter((k) => k !== p.photo).slice(0, 3);

  return (
    <>
      <PageHero photo={p.photo} position="object-[50%_45%]" eyebrow={`${p.status} project`} title={p.title} intro={p.summary} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div><h2 className="text-2xl">Objectives</h2><List items={p.objectives} /></div>
            <div><h2 className="text-2xl">Activities undertaken</h2><List items={p.activities} /></div>
            <div><h2 className="text-2xl">Results</h2><List items={p.results} /></div>
            <div>
              <h2 className="text-2xl">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {gallery.map((k, i) => (
                  <Visual key={k} photo={k} tone={p.tone} label="Gallery image" ratio="aspect-square" className={i === 2 ? "hidden sm:block" : ""} sizes="(min-width: 640px) 250px, 50vw" />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-soft">Real galleries show only photographs published with documented consent.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl bg-sand p-7" aria-label="Project facts">
            <dl className="space-y-4">
              <div><dt className="text-sm font-semibold text-ink-soft">Program</dt><dd>{p.program}</dd></div>
              <div><dt className="text-sm font-semibold text-ink-soft">Location</dt><dd>{p.location}</dd></div>
              <div><dt className="text-sm font-semibold text-ink-soft">Timeline</dt><dd>{p.start}{p.end ? ` – ${p.end}` : " – ongoing"}</dd></div>
              <div><dt className="text-sm font-semibold text-ink-soft">People reached (sample)</dt><dd>{p.beneficiaries.toLocaleString("en-KE")}</dd></div>
            </dl>
            <Link href="/projects" className="mt-6 inline-block font-semibold text-teal underline underline-offset-4">← All projects</Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
