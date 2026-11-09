import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { articles, formatDate } from "@/data/content";
import { Container, Visual } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/news/${a.slug}` },
    openGraph: { type: "article", publishedTime: a.date, title: a.title, description: a.excerpt },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    description: a.excerpt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <article className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Link href="/news" className="font-semibold text-teal underline underline-offset-4">← All news</Link>
        <p className="mt-6 text-sm text-ink-soft"><span className="font-semibold text-clay-deep">{a.category}</span> · <time dateTime={a.date}>{formatDate(a.date)}</time></p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{a.title}</h1>
        <p className="mt-5 text-xl text-ink-soft">{a.excerpt}</p>
        <Visual photo={a.photo} priority tone={a.tone} label={a.title} ratio="aspect-[16/9]" className="my-10" sizes="(min-width: 768px) 768px, 100vw" />
        <div className="space-y-5 text-lg">
          {a.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
