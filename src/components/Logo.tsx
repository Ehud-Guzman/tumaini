import Link from "next/link";
import { site } from "@/config/site";

/** The Tumaini mark: a seedling whose leaves form the crossbar of a "T". */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="32" fill="#b4491f" />
      <rect x="28.5" y="28" width="7" height="25" rx="3.5" fill="#fff" />
      <path d="M32 33C20.5 33 12.5 27.5 11.5 13.5 23.5 14 31.5 20 32 33Z" fill="#e8b04a" />
      <path d="M32 33C43.5 33 51.5 27.5 52.5 13.5 40.5 14 32.5 20 32 33Z" fill="#e8b04a" />
    </svg>
  );
}

/** Mark + wordmark lockup. `tone="light"` is for dark backgrounds. */
export function Logo({ tone = "dark", link = true }: { tone?: "dark" | "light"; link?: boolean }) {
  const inner = (
    <>
      <LogoMark />
      <span className="leading-none">
        <span className={`block font-serif text-xl font-semibold ${tone === "light" ? "text-white" : "text-teal-deep"}`}>{site.name}</span>
        <span className={`mt-1 hidden text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:block ${tone === "light" ? "text-gold" : "text-clay-deep"}`}>Hope · Learning · Dignity</span>
      </span>
    </>
  );
  return link ? (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>{inner}</Link>
  ) : (
    <div className="flex items-center gap-3">{inner}</div>
  );
}
