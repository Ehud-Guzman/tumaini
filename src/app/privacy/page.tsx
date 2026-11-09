import type { Metadata } from "next";
import { site } from "@/config/site";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Tumaini Outreach collects, uses and protects personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl">Privacy policy</h1>
        <p className="rounded-xl border-l-4 border-clay bg-sand p-4 text-ink-soft">Template for demonstration. A live site needs a policy reviewed against Kenya&apos;s Data Protection Act, 2019 and the organisation&apos;s actual practices.</p>
        {[
          ["What we collect", "Only what you give us through forms: your name, email address and message, and any details you choose to share when volunteering or partnering."],
          ["Why we collect it", "To respond to you, process volunteer or partnership enquiries and, if you opt in, send updates. We rely on your consent."],
          ["Children and beneficiaries", "We never publish photographs, names or stories of children or beneficiaries without documented consent from the person and, where applicable, their parent or guardian."],
          ["Your rights", "You may ask to see, correct or delete your information, or withdraw consent at any time."],
          ["Retention and security", "We keep information only as long as needed, restrict access to authorised staff and store it securely."],
        ].map(([h, t]) => (
          <section key={h}><h2 className="text-2xl">{h}</h2><p className="mt-2 text-ink-soft">{t}</p></section>
        ))}
        <p>Questions? Email <a href={`mailto:${site.contact.email}`} className="text-teal underline underline-offset-4">{site.contact.email}</a>.</p>
      </Container>
    </div>
  );
}
