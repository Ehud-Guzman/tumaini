import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { articles, programs, projects } from "@/data/content";
import { events } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/programs", "/projects", "/events", "/impact", "/news", "/get-involved", "/support-us", "/contact", "/privacy", "/credits"];
  return [
    ...staticPages.map((p) => ({ url: `${site.url}${p}` })),
    ...programs.map((p) => ({ url: `${site.url}/programs/${p.slug}` })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}` })),
    ...events.map((e) => ({ url: `${site.url}/events/${e.slug}` })),
    ...articles.map((a) => ({ url: `${site.url}/news/${a.slug}`, lastModified: a.date })),
  ];
}
