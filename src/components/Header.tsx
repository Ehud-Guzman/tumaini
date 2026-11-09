"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Container } from "./ui";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  // The menu is "open" only for the page it was opened on, so it closes
  // automatically on navigation without a state-setting effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (fn: boolean | ((v: boolean) => boolean)) => {
    const next = typeof fn === "function" ? fn(open) : fn;
    setOpenPath(next ? pathname : null);
  };

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      {site.isDemo && (
        <p className="bg-teal-deep px-4 py-1.5 text-center text-xs text-white/90">
          Demo site by GlimmerInk Creations: fictional organisation, sample content.
        </p>
      )}
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.95rem] font-medium transition-colors hover:bg-sand ${active ? "text-clay-deep underline decoration-2 underline-offset-8" : "text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
          {site.features.donationsInfo && (
            <Link href="/support-us" className="ml-3 inline-flex min-h-11 items-center rounded-full bg-clay px-6 text-[0.95rem] font-semibold text-white hover:bg-clay-deep">
              Support us
            </Link>
          )}
        </nav>

        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-full border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-paper xl:hidden">
          <Container className="flex flex-col py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="rounded-lg px-3 py-3.5 text-lg font-medium hover:bg-sand aria-[current=page]:text-clay-deep"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/support-us" className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-clay px-6 font-semibold text-white">
              Support us
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
