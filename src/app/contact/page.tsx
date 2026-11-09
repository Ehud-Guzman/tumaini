import type { Metadata } from "next";
import { site } from "@/config/site";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with Tumaini Outreach.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <PageHero photo="lake" position="object-[50%_55%]" eyebrow="Contact" title="We'd love to hear from you" />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <address className="space-y-5 not-italic">
              <div><h2 className="text-lg">Visit</h2><p className="text-ink-soft">{c.address}</p></div>
              <div><h2 className="text-lg">Call</h2><p><a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-teal underline underline-offset-4">{c.phone}</a></p></div>
              <div><h2 className="text-lg">Email</h2><p><a href={`mailto:${c.email}`} className="text-teal underline underline-offset-4">{c.email}</a></p></div>
              <div><h2 className="text-lg">Office hours</h2><p className="text-ink-soft">{c.hours}</p></div>
            </address>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title={`Map showing ${c.mapQuery}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`}
                className="h-72 w-full"
              />
            </div>
          </div>
          <EnquiryForm variant="contact" />
        </div>
      </Section>
    </>
  );
}
