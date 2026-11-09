import type { Tone } from "./content";
import type { PhotoKey } from "./photos";

/**
 * Sample events for the Tumaini Outreach demo. All fictional.
 * Upcoming vs past is decided by comparing `start` with today's date, so the
 * lists update themselves when the site is rebuilt (or, in Phase 3, when
 * staff add events in the CMS).
 */
export type EventKind = "Fundraiser" | "Volunteer" | "Community" | "Campaign";

export type Event = {
  slug: string;
  title: string;
  kind: EventKind;
  /** ISO date (YYYY-MM-DD) */
  start: string;
  end?: string;
  time: string;
  location: string;
  summary: string;
  description: string[];
  highlights: string[];
  cta: { label: string; href: string };
  /** Highlight this event at the top of the Events page. */
  featured?: boolean;
  /** Shown on past events instead of a call to action. */
  recap?: string;
  photo: PhotoKey;
  tone: Tone;
};

export const events: Event[] = [
  {
    slug: "volunteer-orientation-day",
    title: "Volunteer Orientation Day",
    kind: "Volunteer",
    start: "2026-11-21",
    time: "9:00 am – 1:00 pm",
    location: "Tumaini House, Kisumu",
    summary:
      "New to Tumaini? Meet the team, learn how our programs work and complete your safeguarding induction.",
    description: [
      "Every volunteer starts here. In one morning you will meet our program leads, hear from scholars and mentors, and find the role that matches your time and skills.",
      "Safeguarding induction is part of the day, because everyone who works with children must complete it before they begin.",
    ],
    highlights: [
      "Tour of our offices and partner school activities",
      "Safeguarding induction and certificate",
      "Match with a volunteer role: mentoring, clubs, events or skills-based",
      "Light lunch provided",
    ],
    cta: { label: "Reserve your place", href: "#rsvp" },
    photo: "trees",
    tone: "teal",
  },
  {
    slug: "hope-gala-dinner-2026",
    title: "Hope Gala Dinner 2026",
    kind: "Fundraiser",
    featured: true,
    start: "2026-12-05",
    time: "6:30 pm – 10:00 pm",
    location: "Lakeside venue, Kisumu (sample)",
    summary:
      "An evening of food, music and scholar stories beside Lake Victoria, raising funds for the 2027 school year.",
    description: [
      "Join supporters, partners and families for our flagship evening. Hear directly from scholars, enjoy local food and live music, and help fund school fees, uniforms and learning materials for the year ahead.",
      "Individual seats and table sponsorships are available. If you cannot attend, you can still sponsor a scholar in your name.",
    ],
    highlights: [
      "Three-course dinner with live music",
      "Short programme with scholar and mentor stories",
      "Table sponsorships for businesses and groups",
      "Every ticket supports the 2027 Back-to-School Drive",
    ],
    cta: { label: "Reserve a seat", href: "#rsvp" },
    photo: "lake",
    tone: "gold",
  },
  {
    slug: "dignity-kit-packing-party",
    title: "Dignity Kit Packing Party",
    kind: "Volunteer",
    start: "2026-12-12",
    time: "10:00 am – 2:00 pm",
    location: "Tumaini House, Kisumu",
    summary:
      "Roll up your sleeves with friends, family or colleagues and pack kits that keep girls in class.",
    description: [
      "Reusable dignity kits are sewn by a local women's tailoring group. On packing day, volunteers assemble and wrap hundreds of kits ready for delivery to partner schools.",
      "It's a great activity for teams, youth groups and families. No experience needed, just willing hands.",
    ],
    highlights: [
      "Work alongside members of the tailoring cooperative",
      "Learn how kits and menstrual health education work together",
      "Suitable for groups of up to 20",
      "Refreshments provided",
    ],
    cta: { label: "Join the packing party", href: "#rsvp" },
    photo: "girls",
    tone: "clay",
  },
  {
    slug: "walk-for-girls-education-5k",
    title: "Walk for Girls' Education 5K",
    kind: "Fundraiser",
    start: "2027-01-23",
    time: "7:30 am – 11:00 am",
    location: "Lakefront, Kisumu (sample)",
    summary:
      "Walk or run five kilometres with your community and raise funds so more girls can start the school year.",
    description: [
      "Walkers, runners, families and school teams gather for a morning that is part fun-run, part community celebration. Collect sponsors from friends and colleagues, and every shilling raised goes to girls' school fees and dignity kits.",
      "Register as an individual or form a team. Every finisher gets a medal and a Tumaini t-shirt.",
    ],
    highlights: [
      "5 km route suitable for walkers, runners and families",
      "Individual and team fundraising pages",
      "Medals, t-shirts and refreshments for every finisher",
      "Kids' fun zone and live music at the finish",
    ],
    cta: { label: "Register to walk", href: "#rsvp" },
    photo: "walking",
    tone: "teal",
  },
  {
    slug: "adopt-a-scholar-drive",
    title: "Adopt a Scholar Drive",
    kind: "Campaign",
    start: "2027-01-04",
    end: "2027-02-14",
    time: "Runs for six weeks",
    location: "Online and in partner schools",
    summary:
      "Sponsor a scholar for the year and follow their progress, from fees and uniforms to term reports.",
    description: [
      "In the weeks before and after schools reopen, we invite individuals, families and businesses to sponsor a scholar. Sponsors receive a termly update on attendance and progress, shared with the child's and guardian's consent.",
      "You can sponsor a full year, a term, or contribute toward a shared sponsorship with friends or colleagues.",
    ],
    highlights: [
      "Choose a full-year, term or shared sponsorship",
      "Termly progress updates, shared with consent",
      "Matched giving from partner businesses (sample)",
      "Never shares a child's details without guardian consent",
    ],
    cta: { label: "Sponsor a scholar", href: "/support-us" },
    photo: "classroom",
    tone: "clay",
  },
  {
    slug: "girls-leadership-showcase",
    title: "Girls' Leadership Showcase",
    kind: "Community",
    start: "2027-03-13",
    time: "10:00 am – 1:00 pm",
    location: "Partner school hall, Siaya (sample)",
    summary:
      "Watch our girls' club members present the community projects they have planned and led.",
    description: [
      "Members of our girls' clubs present the projects they designed, from tree-planting to peer-mentoring circles. Parents, teachers and local leaders are invited to listen, ask questions and cheer them on.",
      "A celebration of what girls can do when someone believes in them. Photographs are taken only with consent from each girl and her guardian.",
    ],
    highlights: [
      "Project presentations by girls' club members",
      "Open discussion with parents and local leaders",
      "Certificates for peer mentors",
      "Free entry, families welcome",
    ],
    cta: { label: "Reserve your place", href: "#rsvp" },
    photo: "community",
    tone: "gold",
  },

  {
    slug: "corporate-partners-breakfast",
    title: "Corporate Partners Breakfast",
    kind: "Fundraiser",
    start: "2027-02-19",
    time: "7:30 am – 9:30 am",
    location: "Kisumu business district (sample)",
    summary:
      "Business leaders hear how partnerships fund scholarships, school meals and clean water, and how their teams can get involved.",
    description: [
      "An informal breakfast for business owners and managers who want their company to make a visible difference. Hear from our programs team and a partner school head teacher, and see what a partnership looks like in practice.",
      "Options range from sponsoring a scholar to matched giving, volunteering days for staff and in-kind support.",
    ],
    highlights: [
      "Short briefing on programs and results",
      "Partnership options explained, from sponsorship to staff volunteering",
      "Time to meet partner school leaders",
      "Breakfast provided",
    ],
    cta: { label: "Reserve a seat", href: "#rsvp" },
    photo: "tank",
    tone: "teal",
  },

  // ----- Past events (recaps) -----
  {
    slug: "annual-community-open-day-2026",
    title: "Annual Community Open Day 2026",
    kind: "Community",
    start: "2026-02-28",
    time: "10:00 am – 3:00 pm",
    location: "Tumaini House, Kisumu",
    summary:
      "Neighbours, supporters and partners toured our work and heard from scholars.",
    description: [
      "Our yearly open day gave neighbours, partners and supporters a chance to see how Tumaini works and ask questions about how funds are used.",
    ],
    highlights: ["Guided tours", "Scholar and mentor talks", "Open Q&A on finances and safeguarding"],
    cta: { label: "See upcoming events", href: "/events" },
    recap:
      "Sample recap: around 300 guests attended, 24 new volunteers signed up and 11 local businesses expressed interest in partnering.",
    photo: "school",
    tone: "teal",
  },
  {
    slug: "clean-water-handover-2025",
    title: "Clean Water Handover Ceremony",
    kind: "Community",
    start: "2025-08-22",
    time: "11:00 am – 1:00 pm",
    location: "Siaya County (sample)",
    summary:
      "Celebrating the final of twelve school rainwater systems with pupils, teachers and the community.",
    description: [
      "A short ceremony marked the completion of the Clean Water for Schools project, with maintenance committees receiving their toolkits.",
    ],
    highlights: ["Ribbon cutting by pupils", "Toolkits handed to school committees"],
    cta: { label: "See upcoming events", href: "/events" },
    recap:
      "Sample recap: 12 schools now have on-site clean water, reaching about 2,100 pupils every day.",
    photo: "tank",
    tone: "gold",
  },
  {
    slug: "girls-leadership-graduation-2025",
    title: "Girls' Leadership Academy Graduation",
    kind: "Community",
    start: "2025-06-14",
    time: "10:00 am – 1:00 pm",
    location: "Kisumu County (sample)",
    summary: "180 girls graduated after ten months of mentorship and leadership training.",
    description: [
      "Families and mentors gathered to celebrate the first graduating class of the Girls' Leadership Academy.",
    ],
    highlights: ["Graduation and certificates", "Showcase of community action projects"],
    cta: { label: "See upcoming events", href: "/events" },
    recap:
      "Sample recap: 180 girls graduated and launched 41 community action projects.",
    photo: "reading",
    tone: "clay",
  },
];

const today = () => new Date().toISOString().slice(0, 10);

/** Upcoming = not yet finished. Sorted soonest first. */
export const upcomingEvents = () =>
  events
    .filter((e) => (e.end ?? e.start) >= today())
    .sort((a, b) => a.start.localeCompare(b.start));

/** Featured event first, then the rest by date. Used where only a few events fit. */
export const spotlightEvents = () => {
  const list = upcomingEvents();
  const f = list.find((e) => e.featured);
  return f ? [f, ...list.filter((e) => e !== f)] : list;
};

/** Past events, most recent first. */
export const pastEvents = () =>
  events
    .filter((e) => (e.end ?? e.start) < today())
    .sort((a, b) => b.start.localeCompare(a.start));

export const eventDate = (iso: string) => {
  const d = new Date(iso + "T00:00:00");
  return {
    day: d.toLocaleDateString("en-KE", { day: "numeric" }),
    month: d.toLocaleDateString("en-KE", { month: "short" }),
    weekday: d.toLocaleDateString("en-KE", { weekday: "long" }),
    full: d.toLocaleDateString("en-KE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
  };
};
