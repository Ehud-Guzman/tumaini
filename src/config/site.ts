/**
 * Single source of truth for branding and organisation details.
 * To re-skin this site for a real client: change this file, the colour tokens
 * in globals.css, and the content in src/data/content.ts.
 */
export const site = {
  name: "Tumaini Outreach",
  shortName: "Tumaini",
  tagline: "Hope, learning and dignity for every girl and family.",
  description:
    "Tumaini Outreach keeps girls in school, builds confidence and leadership, and meets the basic needs that stand between families and a future.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_KE",

  /** Demo notice. Set to false for a real client deployment. */
  isDemo: true,
  demoNotice:
    "Tumaini Outreach is a fictional organisation created by GlimmerInk Creations as a design demonstration. All names, figures and stories are sample content. Photographs are openly licensed images used for illustration only and do not depict the organisation's beneficiaries.",

  contact: {
    email: "hello@tumaini-outreach.example",
    phone: "+254 700 000 000",
    address: "Tumaini House, Example Road, Kisumu, Kenya",
    hours: "Monday – Friday, 8:00 am – 5:00 pm EAT",
    mapQuery: "Kisumu, Kenya",
  },

  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],

  /** Feature flags: switch parts of the site on/off per client. */
  features: {
    donationsInfo: true,
    newsletter: true,
    news: true,
  },

  donations: {
    mpesaPaybill: "000000",
    mpesaAccount: "TUMAINI",
    bankName: "Example Bank Kenya",
    bankAccountName: "Tumaini Outreach",
    bankAccountNumber: "0000000000",
    note: "Sample payment details for demonstration only. Do not send money.",
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
    { label: "Impact", href: "/impact" },
    { label: "News", href: "/news" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
