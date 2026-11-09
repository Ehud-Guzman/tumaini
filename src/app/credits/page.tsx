import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/data/photos";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Attribution for the photographs used on this demonstration site.",
  alternates: { canonical: "/credits" },
};

export default function CreditsPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl">Photo credits</h1>
        <p className="mt-5 rounded-xl border-l-4 border-clay bg-sand p-4 text-ink-soft">
          Tumaini Outreach is a fictional organisation. The photographs below are real, openly licensed images from Wikimedia Commons, used only to illustrate this design demonstration. The people pictured have no connection to Tumaini Outreach, and the captions on this site do not describe them or their circumstances. A real client site uses the organisation&apos;s own photographs, published only with documented consent.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {Object.values(photos).map((p) => (
            <li key={p.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 400px, 100vw" className="object-cover" />
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                By {p.author}.{" "}
                {p.licenseUrl ? <a href={p.licenseUrl} className="text-teal underline underline-offset-2">{p.license}</a> : p.license}.{" "}
                <a href={p.source} className="text-teal underline underline-offset-2">Source on Wikimedia Commons</a>.
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
