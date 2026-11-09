import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-semibold text-clay-deep">404</p>
      <h1 className="mt-2 text-4xl sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-ink-soft">It may have moved, or the link may be mistyped.</p>
      <div className="mt-8"><ButtonLink href="/">Back to home</ButtonLink></div>
    </Container>
  );
}
