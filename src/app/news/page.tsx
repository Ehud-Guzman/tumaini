import type { Metadata } from "next";
import { articles } from "@/data/content";
import { ArticleCard } from "@/components/cards";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "News & updates",
  description: "Stories, events and announcements from Tumaini Outreach.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero photo="classroom" position="object-[50%_40%]" eyebrow="News" title="What's happening at Tumaini" intro="Updates from the field, upcoming events and announcements." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </Section>
    </>
  );
}
