/**
 * Sample content for the Tumaini Outreach demo.
 * Every figure, name and story here is fictional. In a real client build this
 * file is replaced by CMS data (Phase 3) and every statistic must be supplied
 * and verified by the organisation.
 */

import type { PhotoKey } from "./photos";

export type Tone = "teal" | "clay" | "gold";

export type Program = {
  slug: string;
  title: string;
  summary: string;
  tone: Tone;
  icon: "book" | "spark" | "home" | "heart" | "tools" | "shield";
  photo: PhotoKey;
  description: string;
  objectives: string[];
  beneficiaries: string;
  activities: string[];
  coverage: string;
  achievements: string[];
};

export const programs: Program[] = [
  {
    slug: "education-scholarships",
    title: "Education & Scholarships",
    summary:
      "School fees, uniforms and learning materials so no child leaves the classroom because of cost.",
    tone: "teal",
    icon: "book",
    photo: "classroom",
    description:
      "Many bright children in our communities drop out when fees become unaffordable. We pay school fees, provide uniforms and learning materials, and follow each scholar's progress from primary school through to graduation or a trade qualification.",
    objectives: [
      "Keep scholars in school from primary through secondary level.",
      "Improve literacy and numeracy through after-school study support.",
      "Support the transition to university, college or vocational training.",
    ],
    beneficiaries:
      "Children and young people from low-income households, selected through a community-led and transparent process.",
    activities: [
      "Annual fees and uniform support",
      "Library corners and learning materials in partner schools",
      "Holiday tutoring and revision camps",
      "Mentorship pairing for scholars",
    ],
    coverage: "Kisumu and Siaya counties (sample).",
    achievements: [
      "Sample: 40 partner schools supported",
      "Sample: 92% of scholars progressing to the next level each year",
    ],
  },
  {
    slug: "girls-empowerment",
    title: "Girls' Empowerment",
    summary:
      "Mentorship, dignity kits and leadership clubs that help girls stay in school and find their voice.",
    tone: "clay",
    icon: "spark",
    photo: "girls",
    description:
      "A girl who understands her rights, has the supplies she needs and has a mentor in her corner is far more likely to stay in school. We run girls' clubs, provide sanitary and dignity kits, and train young women to lead the next generation.",
    objectives: [
      "Reduce school absenteeism linked to menstrual health.",
      "Build confidence, leadership and life skills in adolescent girls.",
      "Strengthen community understanding of girls' rights and safeguarding.",
    ],
    beneficiaries:
      "Adolescent girls aged 10–19 in partner schools and surrounding communities, with parental consent.",
    activities: [
      "Weekly girls' clubs and mentorship circles",
      "Dignity kit distribution and menstrual health education",
      "Leadership and public-speaking workshops",
      "Community dialogues with parents and local leaders",
    ],
    coverage: "Kisumu, Siaya and Homa Bay counties (sample).",
    achievements: [
      "Sample: 28 active girls' clubs",
      "Sample: 65 young women trained as peer mentors",
    ],
  },
  {
    slug: "basic-needs",
    title: "Basic Needs Support",
    summary:
      "Food, clean water and household essentials for families at their most vulnerable moments.",
    tone: "gold",
    icon: "home",
    photo: "nyando",
    description:
      "A child cannot learn on an empty stomach or in a home without clean water. We provide emergency food support, water access and household essentials, always alongside a pathway to lasting stability.",
    objectives: [
      "Meet urgent food and household needs of vulnerable families.",
      "Improve access to safe drinking water near homes and schools.",
      "Link families to livelihood and savings groups for long-term resilience.",
    ],
    beneficiaries:
      "Households identified with community leaders, prioritising child-headed, elderly-headed and single-parent families.",
    activities: [
      "Seasonal food baskets",
      "Rainwater harvesting tanks at schools and homes",
      "Household essentials (blankets, mosquito nets, cooking supplies)",
      "Village savings and livelihood groups",
    ],
    coverage: "Kisumu and Siaya counties (sample).",
    achievements: [
      "Sample: 12 water points installed",
      "Sample: 800 households supported with essentials",
    ],
  },
  {
    slug: "health-nutrition",
    title: "Health & Nutrition",
    summary:
      "School meals, health camps and menstrual health education so children are well enough to learn.",
    tone: "clay",
    icon: "heart",
    photo: "assembly",
    description:
      "Hungry and unwell children struggle to focus, and many miss school entirely. We provide nutritious meals at partner schools, run regular health and eye-screening camps, and link families to local clinics.",
    objectives: [
      "Ensure no pupil in a partner school learns on an empty stomach.",
      "Detect and treat common health problems early.",
      "Strengthen hygiene and health knowledge in schools and homes.",
    ],
    beneficiaries:
      "Pupils in partner primary schools and their families, prioritising the youngest and most vulnerable children.",
    activities: [
      "Daily school meals prepared with local suppliers",
      "Termly health and eye-screening camps with volunteer clinicians",
      "Handwashing stations and hygiene education",
      "Referrals to county health facilities",
    ],
    coverage: "Siaya and Kisumu counties (sample).",
    achievements: [
      "Sample: 9 schools running daily meal programs",
      "Sample: 3,200 health screenings completed",
    ],
  },
  {
    slug: "youth-skills-livelihoods",
    title: "Youth Skills & Livelihoods",
    summary:
      "Vocational training, mentorship and start-up support that turn school-leavers into earners.",
    tone: "gold",
    icon: "tools",
    photo: "farmers",
    description:
      "Not every young person goes on to university, and every one of them deserves a path to income. We fund vocational courses, run business-skills workshops and offer small start-up grants to help young people and caregivers earn a living.",
    objectives: [
      "Equip young people aged 16–25 with market-ready skills.",
      "Support caregivers to start or grow small businesses.",
      "Build savings and mutual-support groups in every community we serve.",
    ],
    beneficiaries:
      "Out-of-school youth, school-leavers and caregivers from low-income households, selected with community leaders.",
    activities: [
      "Sponsored vocational courses (tailoring, mechanics, hospitality, IT)",
      "Business-skills and financial-literacy workshops",
      "Small start-up grants and mentorship",
      "Village savings and loan associations",
    ],
    coverage: "Kisumu and Homa Bay counties (sample).",
    achievements: [
      "Sample: 210 young people completed vocational training",
      "Sample: 36 community savings groups active",
    ],
  },
  {
    slug: "child-protection",
    title: "Child Protection & Safeguarding",
    summary:
      "Safe spaces, trained champions and clear reporting so every child is protected, heard and supported.",
    tone: "teal",
    icon: "shield",
    photo: "reading",
    description:
      "Children can only thrive when they are safe. We train teachers, parents and community leaders in child protection, set up confidential reporting routes and run safe spaces where children can speak up and be supported.",
    objectives: [
      "Prevent abuse, exploitation and neglect through awareness and training.",
      "Provide safe, confidential ways for children to report concerns.",
      "Work with authorities and partners to respond quickly and sensitively.",
    ],
    beneficiaries:
      "Children in partner schools and communities, along with the adults responsible for their care and protection.",
    activities: [
      "Safeguarding training for teachers, volunteers and staff",
      "Child-friendly safe spaces and school protection clubs",
      "Parent and community awareness dialogues",
      "Referral pathways with local authorities and partners",
    ],
    coverage: "All partner schools and communities (sample).",
    achievements: [
      "Sample: 420 teachers and volunteers trained",
      "Sample: 40 schools with active protection clubs",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  program: string;
  status: "Ongoing" | "Completed";
  location: string;
  start: string;
  end?: string;
  beneficiaries: number;
  summary: string;
  objectives: string[];
  activities: string[];
  results: string[];
  tone: Tone;
  photo: PhotoKey;
};

export const projects: Project[] = [
  {
    slug: "back-to-school-2026",
    title: "Back-to-School Scholarship Drive 2026",
    program: "Education & Scholarships",
    status: "Ongoing",
    location: "Kisumu County",
    start: "January 2026",
    beneficiaries: 320,
    summary:
      "Covering fees, uniforms and books for 320 scholars across 18 partner schools for the 2026 school year.",
    objectives: [
      "Ensure every selected scholar starts term one fully equipped.",
      "Track attendance and performance termly.",
    ],
    activities: [
      "Community selection panels with local chiefs and teachers",
      "Bulk purchase of uniforms from local tailors",
      "Termly progress reviews with each school",
    ],
    results: [
      "Sample: 320 scholars enrolled and equipped",
      "Sample: 94% attendance in term one",
    ],
    tone: "teal",
    photo: "walking",
  },
  {
    slug: "dignity-kits-initiative",
    title: "Dignity Kits Initiative",
    program: "Girls' Empowerment",
    status: "Ongoing",
    location: "Siaya & Homa Bay Counties",
    start: "March 2025",
    beneficiaries: 1450,
    summary:
      "Reusable sanitary kits and menstrual health education for girls in 22 schools, made by a local women's tailoring group.",
    objectives: [
      "Reduce missed school days linked to menstruation.",
      "Create income for local women's groups.",
    ],
    activities: [
      "Kit production by a women's tailoring cooperative",
      "Health education sessions led by trained peer mentors",
      "Quarterly kit replenishment",
    ],
    results: [
      "Sample: 1,450 girls reached",
      "Sample: 18 women earning income from kit production",
    ],
    tone: "clay",
    photo: "girls",
  },
  {
    slug: "clean-water-for-schools",
    title: "Clean Water for Schools",
    program: "Basic Needs Support",
    status: "Completed",
    location: "Siaya County",
    start: "June 2024",
    end: "August 2025",
    beneficiaries: 2100,
    summary:
      "Twelve rainwater harvesting systems installed at primary schools, giving pupils safe drinking water on site.",
    objectives: [
      "Provide safe drinking water within school grounds.",
      "Train school committees to maintain the systems.",
    ],
    activities: [
      "Site surveys and community agreements",
      "Installation of tanks, gutters and filters",
      "Maintenance training for school committees",
    ],
    results: [
      "Sample: 12 schools now have on-site clean water",
      "Sample: 2,100 pupils benefiting daily",
    ],
    tone: "gold",
    photo: "tank",
  },
  {
    slug: "girls-leadership-academy",
    title: "Girls' Leadership Academy",
    program: "Girls' Empowerment",
    status: "Completed",
    location: "Kisumu County",
    start: "September 2024",
    end: "June 2025",
    beneficiaries: 180,
    summary:
      "A ten-month mentorship and leadership programme for 180 girls, graduating with community action projects of their own.",
    objectives: [
      "Build leadership, communication and planning skills.",
      "Support each girl to design a community project.",
    ],
    activities: [
      "Monthly leadership weekends",
      "One-to-one mentorship with young women professionals",
      "Community showcase and graduation",
    ],
    results: [
      "Sample: 180 girls graduated",
      "Sample: 41 community action projects launched",
    ],
    tone: "clay",
    photo: "trees",
  },
];

export const impactStats = [
  { value: "2,500+", label: "Children and girls supported" },
  { value: "15", label: "Communities reached" },
  { value: "12", label: "Projects completed" },
  { value: "800", label: "Households assisted" },
  { value: "200", label: "Volunteers engaged" },
];

export type Story = { name: string; role: string; quote: string };
export const stories: Story[] = [
  {
    name: "Amina (sample)",
    role: "Scholar, Form 3",
    quote:
      "Before the scholarship I was told to stay home. Now I'm preparing for my KCSE and I want to become a nurse.",
  },
  {
    name: "Mama Joyce (sample)",
    role: "Parent and tailoring group member",
    quote:
      "Sewing the dignity kits gave me income, and it gives my daughter and her friends what they need to stay in class.",
  },
  {
    name: "Mr. Otieno (sample)",
    role: "Head teacher, partner school",
    quote:
      "Since the water tanks arrived, pupils spend less time walking to fetch water and more time learning.",
  },
];

export type Article = {
  slug: string;
  title: string;
  category: "Update" | "Event" | "Story" | "Announcement";
  date: string; // ISO
  excerpt: string;
  body: string[];
  tone: Tone;
  photo: PhotoKey;
};

export const articles: Article[] = [
  {
    slug: "term-one-scholars-welcomed",
    title: "320 scholars start term one fully equipped",
    category: "Update",
    date: "2026-01-14",
    excerpt:
      "Uniforms, books and fees were delivered to 18 partner schools ahead of opening day.",
    body: [
      "Opening day looked a little different at 18 partner schools this January. Every scholar in the Back-to-School Drive arrived in a new uniform, with books in their bags and fees already settled.",
      "Our field team worked with head teachers and local leaders for three months to confirm the final list through community selection panels.",
      "Termly reviews will track attendance and performance so that support can adjust early when a scholar is struggling.",
    ],
    tone: "teal",
    photo: "assembly",
  },
  {
    slug: "hope-gala-dinner-2026",
    title: "Join us for the Hope Gala Dinner on 5 December",
    category: "Event",
    date: "2026-10-26",
    excerpt: "An evening of music, stories and giving beside Lake Victoria, with every shilling raised going to scholarships.",
    body: [
      "On Saturday 5 December we are hosting our Hope Gala Dinner, an evening of food, music and the voices of the scholars you help to keep in school.",
      "Every ticket and table sponsorship goes toward school fees, uniforms and learning materials for the 2027 school year.",
      "Seats are limited. Reserve yours early, or sponsor a scholar if you cannot attend.",
    ],
    tone: "gold",
    photo: "lake",
  },
  {
    slug: "why-dignity-kits-matter",
    title: "Why a simple kit keeps girls in school",
    category: "Story",
    date: "2026-03-05",
    excerpt:
      "Missing school every month adds up. Here is how reusable kits, education and a local tailoring group change that.",
    body: [
      "For many girls, a few days of missed class each month adds up to weeks lost each year. The fix is surprisingly simple: reliable supplies, honest education and a community that talks about it openly.",
      "Our dignity kits are sewn by a women's cooperative nearby. That means every kit supports a family as well as a student.",
      "Names and photographs of girls are never published without clear consent from the girl and her guardian.",
    ],
    tone: "clay",
    photo: "girls",
  },
  {
    slug: "new-partner-welcome",
    title: "Welcoming a new school partnership network",
    category: "Announcement",
    date: "2026-04-02",
    excerpt:
      "Six additional schools join our scholarship and girls' club network this year.",
    body: [
      "We are pleased to welcome six more schools into the Tumaini network. Each school signs a partnership agreement covering safeguarding, reporting and shared responsibilities.",
      "Our safeguarding policy applies to every volunteer, staff member and visitor.",
    ],
    tone: "teal",
    photo: "classroom",
  },
];

export const team = [
  { name: "Grace Akinyi (sample)", role: "Founder & Executive Director" },
  { name: "Samuel Odhiambo (sample)", role: "Programs Manager" },
  { name: "Faith Wanjiru (sample)", role: "Girls' Programs Lead" },
  { name: "David Ouma (sample)", role: "Finance & Compliance Officer" },
];

export const values = [
  { title: "Dignity", text: "Every person is treated with respect, and their story is theirs to tell." },
  { title: "Community-led", text: "Local leaders and families help decide who we serve and how." },
  { title: "Transparency", text: "We share what we spend, what we achieve and what we learn." },
  { title: "Safeguarding", text: "Children come first. Consent is required before any photo or story is shared." },
];

export const partners = [
  "Kisumu Education Forum",
  "Lake Region Women's Network",
  "Siaya Water Trust",
  "Community Health Alliance",
  "Local Tailors' Cooperative",
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const givingLevels = [
  { amount: "KES 500", title: "Learning supplies", impact: "Books, pens and a geometry set for a scholar for a term." },
  { amount: "KES 2,500", title: "A year of dignity", impact: "Reusable dignity kits and health education for one girl for a year." },
  { amount: "KES 5,000", title: "A term in school", impact: "School fees and uniform support for one scholar for a term." },
  { amount: "KES 15,000", title: "Sponsor a scholar", impact: "A full school year of fees, uniform, meals and mentorship." },
];
