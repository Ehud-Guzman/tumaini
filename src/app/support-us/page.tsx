import type { Metadata } from "next";
import { site } from "@/config/site";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { GiveHope } from "@/components/cards";

export const metadata: Metadata = {
  title: "Support us",
  description: "How your contribution helps and how to give.",
  alternates: { canonical: "/support-us" },
};

export default function SupportPage() {
  const d = site.donations;
  return (
    <>
      <PageHero photo="farmers" position="object-[50%_45%]" eyebrow="Support us" title="Your gift keeps a child learning" intro="Every contribution is used for the programs described on this site, and we report on it openly." />

      <Section labelledBy="uses-h">
        <SectionHeading id="uses-h" eyebrow="Where it goes" title="What your support makes possible" align="center" />
        <GiveHope />
      </Section>

      <Section tint labelledBy="how-h" id="ways">
        <SectionHeading id="how-h" eyebrow="How to give" title="Donation methods" />
        <p className="mb-6 rounded-xl border-l-4 border-clay bg-white p-4 text-ink-soft" role="note">{d.note}</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7">
            <h3 className="text-xl">M-Pesa Paybill</h3>
            <dl className="mt-4 space-y-2">
              <div className="flex justify-between"><dt className="text-ink-soft">Business number</dt><dd className="font-semibold">{d.mpesaPaybill}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-soft">Account number</dt><dd className="font-semibold">{d.mpesaAccount}</dd></div>
            </dl>
          </div>
          <div className="rounded-2xl bg-white p-7">
            <h3 className="text-xl">Bank transfer</h3>
            <dl className="mt-4 space-y-2">
              <div className="flex justify-between"><dt className="text-ink-soft">Bank</dt><dd className="font-semibold">{d.bankName}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-soft">Account name</dt><dd className="font-semibold">{d.bankAccountName}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-soft">Account number</dt><dd className="font-semibold">{d.bankAccountNumber}</dd></div>
            </dl>
          </div>
        </div>
        <p className="mt-6 text-ink-soft">Online card payments are not enabled in this version. They are added only once the organisation has verified its payment accounts.</p>
      </Section>

      <Section labelledBy="trans-h">
        <SectionHeading id="trans-h" eyebrow="Transparency" title="How we handle funds" />
        <p className="max-w-2xl text-lg text-ink-soft">Financial summaries and audited statements are published in our annual reports. Donor details are never shared or sold, and are handled under Kenya&apos;s Data Protection Act.</p>
      </Section>
    </>
  );
}
