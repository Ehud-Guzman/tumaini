import Image from "next/image";
import { site } from "@/config/site";
import { photos } from "@/data/photos";
import { articles, partners, programs, projects, stories } from "@/data/content";
import { ArticleCard, EventCard, GiveHope, ProgramCard, ProjectCard, StatsStrip } from "@/components/cards";
import { spotlightEvents } from "@/data/events";
import { ButtonLink, Container, Section, SectionHeading, Visual } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-teal-deep text-white">
        <Image src={photos.classroom.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[50%_35%]" />
        {/* Solid tint keeps white text above 4.5:1 contrast on the photo */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-teal-deep/65" />
        <Container className="flex min-h-[34rem] flex-col justify-center py-20 sm:min-h-[40rem] sm:py-28">
          <div className="rise max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Education · Girls&apos; empowerment · Basic needs
            </p>
            <h1 className="text-4xl text-white sm:text-6xl lg:text-7xl">
              Every girl deserves a classroom, a champion and a chance.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">{site.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/support-us">Support our work</ButtonLink>
              <ButtonLink href="/projects" variant="light">See our projects</ButtonLink>
            </div>
          </div>
        </Container>
        <span className="absolute bottom-2 right-3 z-10 rounded-full bg-black/55 px-2.5 py-0.5 text-[11px] text-white/90">
          Photo: {photos.classroom.author} · {photos.classroom.license}
        </span>
      </section>

      {/* Mission */}
      <Section tint labelledBy="mission-h">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Visual photo="school" tone="clay" label="A teacher with pupils at their school" />
          <div>
            <SectionHeading id="mission-h" eyebrow="Who we are" title="Hope in action, led by the community" />
            <p className="-mt-4 text-lg text-ink-soft">
              <em>Tumaini</em> means hope in Kiswahili. We work alongside families, teachers and local leaders to remove the barriers that keep girls out of school and children away from a future: fees, supplies, safety and hunger.
            </p>
            <div className="mt-7"><ButtonLink href="/about" variant="secondary">Our story</ButtonLink></div>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <section className="bg-teal-deep py-16 sm:py-20" aria-labelledby="impact-h">
        <Container>
          <h2 id="impact-h" className="mb-8 text-center text-3xl text-white sm:text-4xl">Our impact so far</h2>
          <StatsStrip />
          <p className="mt-4 text-center text-sm text-white/65">Sample figures for demonstration. Real figures are supplied and verified by the organisation.</p>
        </Container>
      </section>

      {/* Programs */}
      <Section labelledBy="programs-h">
        <SectionHeading id="programs-h" eyebrow="What we do" title="Six programs, one purpose" intro="Each program meets a different barrier, and together they give children and families a path forward." />
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => <ProgramCard key={p.slug} p={p} />)}
        </div>
      </Section>

      {/* Give hope */}
      <Section tint labelledBy="give-h">
        <SectionHeading id="give-h" eyebrow="Give hope" title="What your gift can do" intro="Whatever you can give, it goes straight to keeping a child learning, safe and well." align="center" />
        <GiveHope />
      </Section>

      {/* Events */}
      <Section labelledBy="events-h">
        <SectionHeading id="events-h" eyebrow="Join us" title="Upcoming events" intro="Meet the team, roll up your sleeves or celebrate with us. Everyone is welcome." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spotlightEvents().slice(0, 3).map((e) => <EventCard key={e.slug} e={e} />)}
        </div>
        <div className="mt-10"><ButtonLink href="/events" variant="outline">All events</ButtonLink></div>
      </Section>

      {/* Projects */}
      <Section tint labelledBy="projects-h">
        <SectionHeading id="projects-h" eyebrow="Our work" title="Projects you can follow from start to finish" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => <div key={p.slug} className="relative"><ProjectCard p={p} /></div>)}
        </div>
        <div className="mt-10"><ButtonLink href="/projects" variant="outline">All projects</ButtonLink></div>
      </Section>

      {/* Stories */}
      <Section labelledBy="stories-h">
        <SectionHeading id="stories-h" eyebrow="Voices" title="In their own words" intro="Sample testimonials. Real stories are published only with documented consent, and children's identities are protected." />
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <figure key={s.name} className="rounded-2xl border border-line bg-white p-7">
              <blockquote className="font-serif text-lg leading-snug text-teal-deep">“{s.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-ink-soft"><strong className="text-ink">{s.name}</strong><br />{s.role}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* News */}
      {site.features.news && (
        <Section tint labelledBy="news-h">
          <SectionHeading id="news-h" eyebrow="Latest" title="News and updates" />
          <div className="grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
          <div className="mt-10"><ButtonLink href="/news" variant="outline">All news</ButtonLink></div>
        </Section>
      )}

      {/* Partners */}
      <Section labelledBy="partners-h">
        <SectionHeading id="partners-h" title="Working alongside" align="center" />
        <ul className="flex flex-wrap justify-center gap-3">
          {partners.map((p) => (
            <li key={p} className="rounded-full border border-line bg-white px-5 py-2.5 text-ink-soft">{p} <span className="text-xs">(sample)</span></li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section className="bg-clay py-16 text-white sm:py-20" aria-labelledby="cta-h">
        <Container className="text-center">
          <h2 id="cta-h" className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">Be part of the story</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">Give, volunteer or partner with us. Every contribution of time, skill or resources keeps a child learning.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/support-us" variant="light">Support us</ButtonLink>
            <ButtonLink href="/get-involved" variant="light">Volunteer or partner</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
