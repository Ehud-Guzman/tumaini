# Tumaini Outreach

A demonstration NGO website built by **GlimmerInk Creations**. Tumaini Outreach is a **fictional** organisation (education, girls' empowerment and basic needs, in Kenya). Every name, figure and story is sample content.

> Part of the GlimmerInk NGO Website Framework: a reusable foundation that can be re-skinned for real clients.

## What's in it

- Home, About, Programs (6, each with a detail page), Projects (detail pages with galleries), Events (featured, upcoming and past, with RSVP), Impact, News, Get Involved, Support Us, Contact, Privacy, Photo credits
- SEO: per-page metadata, Open Graph and Twitter cards, sitemap, robots, canonical URLs, schema.org data (NGO, Article, Event)
- Accessibility aimed at WCAG 2.2 AA: semantic HTML, skip link, keyboard navigation, visible focus, reduced-motion support
- Forms with validation, consent and a honeypot (demo only, no backend yet)
- Demo safeguards: visible demo notice, search engines blocked while `site.isDemo` is true

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npm run icons    # regenerate favicon/app icons from src/app/icon.svg
```

## Re-skinning for a real client

| What | Where |
|---|---|
| Name, contact details, nav, donation details, feature flags | `src/config/site.ts` |
| Programs, projects, news, stories, giving levels | `src/data/content.ts` |
| Events | `src/data/events.ts` |
| Photos and attribution | `src/data/photos.ts`, `public/images/` |
| Colours and type | `src/app/globals.css`, `src/app/layout.tsx` |
| Logo | `src/app/icon.svg`, `src/components/Logo.tsx` |

Set `isDemo: false` in `site.ts` before launching a real site (removes the demo banner and allows indexing).

## Photos

The photographs are real, openly licensed images from Wikimedia Commons, used only to illustrate this demo. The people pictured have no connection to the fictional organisation. Authors and licences are shown on each image and on the `/credits` page. A real client site must use the organisation's own photographs, published only with documented consent, especially where children appear.

## Roadmap

1. Public site (done)
2. Database and CMS: Prisma, PostgreSQL, Auth.js, roles (Admin, Editor, Contributor)
3. Volunteer and partner workflows, newsletter, messages inbox
4. Donation integration (M-Pesa Daraja, card gateway) once a client has verified accounts
