import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "./ui";
import { Newsletter } from "./Newsletter";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-teal-deep text-white/85">
      {site.features.newsletter && (
        <div className="border-b border-white/15">
          <Container className="grid gap-6 py-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl text-white">Stay in the loop</h2>
              <p className="mt-2 text-white/80">Occasional updates on our work. No spam, unsubscribe anytime.</p>
            </div>
            <Newsletter />
          </Container>
        </div>
      )}

      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="light" link={false} />
          <p className="mt-4 max-w-sm">{site.tagline}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2" aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="underline decoration-white/40 underline-offset-4 hover:text-white">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold text-white">Explore</h2>
          <ul className="space-y-2">
            {site.nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white hover:underline">{n.label}</Link></li>
            ))}
            <li><Link href="/support-us" className="hover:text-white hover:underline">Support us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-base font-semibold text-white">Contact</h2>
          <address className="space-y-2 not-italic">
            <p>{site.contact.address}</p>
            <p><a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white hover:underline">{site.contact.phone}</a></p>
            <p><a href={`mailto:${site.contact.email}`} className="hover:text-white hover:underline">{site.contact.email}</a></p>
            <p className="text-sm">{site.contact.hours}</p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-4 py-6 text-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. <Link href="/privacy" className="underline underline-offset-4 hover:text-white">Privacy policy</Link> · <Link href="/credits" className="underline underline-offset-4 hover:text-white">Photo credits</Link></p>
            {site.credit && (
              <p>
                {site.credit.prefix}{" "}
                <a
                  href={site.credit.href}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-white underline decoration-gold underline-offset-4 hover:text-gold"
                >
                  {site.credit.name}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            )}
          </div>
          {site.isDemo && <p className="max-w-3xl text-white/70">{site.demoNotice}</p>}
        </Container>
      </div>
    </footer>
  );
}
