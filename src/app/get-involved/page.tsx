import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Volunteer, partner or support Tumaini Outreach.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero photo="girls" position="object-[50%_55%]" eyebrow="Get involved" title="There is a place for you in this work" intro="Whether you have an hour, a skill or an organisation to bring, we would love to hear from you." />
      <Section labelledBy="vol-h">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="vol-h" eyebrow="Volunteer" title="Give your time" intro="Mentor a scholar, help run a girls' club or lend a professional skill. All volunteers complete safeguarding induction before working with children." />
          </div>
          <EnquiryForm variant="volunteer" />
        </div>
      </Section>
      <Section tint labelledBy="partner-h">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="partner-h" eyebrow="Partner" title="Work with us" intro="Schools, businesses and community groups can partner on scholarships, supplies and skills. Tell us what you have in mind." />
          </div>
          <EnquiryForm variant="partner" />
        </div>
      </Section>
    </>
  );
}
