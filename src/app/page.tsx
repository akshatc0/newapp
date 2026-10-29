import Link from "next/link";

import Reveal from "@/components/site/Reveal";
import RoleList from "@/components/site/RoleList";
import Section from "@/components/site/Section";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import {
  certifications,
  education,
  experience,
  figures,
  honours,
  leadership,
  profile,
  projects,
} from "@/content/profile";

const offTheClock = [
  {
    name: "Photography",
    href: "/photography",
    note: "A wall of photos you can drag around.",
    image: "/images/photography/img8.png",
  },
  {
    name: "Music",
    href: "/music",
    note: "The albums on repeat.",
    image: "/images/albums/16UMGIM67863.rgb-832f5b16-9eb0-4954-8fd2-f115f043ce5c.png",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-8 sm:pt-24 md:pb-24 md:pt-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {profile.location}
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Math &amp; Financial Analysis student at Waterloo,{" "}
              <em className="text-accent">working in risk.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{profile.intro}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4 border-l-2 border-accent pl-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{profile.now.label}</p>
              <p className="text-ink">{profile.now.text}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <Link
                href="/resume"
                className="rounded-full bg-ink px-5 py-2.5 font-medium text-paper transition-opacity hover:opacity-85"
              >
                Resume
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-rule px-5 py-2.5 font-medium text-ink transition-colors hover:border-ink"
              >
                Email
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-rule px-5 py-2.5 font-medium text-ink transition-colors hover:border-ink"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </section>

        {/* Figures */}
        <section aria-label="Selected figures" className="border-t border-rule bg-paper-raised">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-8 lg:grid-cols-4">
            {figures.map((figure, i) => (
              <div
                key={figure.label}
                className={`py-8 pr-4 sm:py-10 ${i % 2 === 1 ? "border-l border-rule pl-4 lg:pl-6" : ""} ${
                  i >= 2 ? "border-t border-rule lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <dt className="sr-only">{figure.label}</dt>
                <dd className="font-serif text-4xl tracking-tight text-ink tabular sm:text-5xl">{figure.value}</dd>
                <dd className="mt-2 text-sm leading-snug text-muted">{figure.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="experience" index="01" label="Experience">
          <RoleList roles={experience} />
        </Section>

        <Section id="work" index="02" label="Selected work">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects#${project.slug}`}
                className="group flex flex-col rounded-xl border border-rule bg-paper-raised p-6 transition-colors hover:border-ink sm:p-8"
              >
                <p className="font-mono text-xs text-muted tabular">
                  {project.start} – {project.end}
                </p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">{project.name}</h3>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                <p className="mt-5 flex-1 leading-relaxed text-ink-soft">{project.summary}</p>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-rule pt-5">
                  <dl className="flex gap-8">
                    {project.figures.map((f) => (
                      <div key={f.label}>
                        <dd className="font-serif text-2xl text-ink tabular">{f.value}</dd>
                        <dt className="text-xs text-muted">{f.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <span className="text-sm text-muted transition-colors group-hover:text-accent">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="leadership" index="03" label="Leadership & service">
          <RoleList roles={leadership} />
        </Section>

        <Section id="honours" index="04" label="Honours">
          <ul className="divide-y divide-rule border-y border-rule">
            {honours.map((h) => (
              <li key={h.name} className="grid gap-1 py-4 sm:grid-cols-[1fr_16rem_6rem] sm:items-baseline sm:gap-6">
                <div>
                  <p className="text-ink">{h.name}</p>
                  {h.note && <p className="mt-1 text-sm text-muted">{h.note}</p>}
                </div>
                <p className="text-sm text-muted">{h.issuer}</p>
                <p className="font-mono text-xs text-muted tabular sm:text-right">{h.date}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" index="05" label="Education">
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
            <div>
              <p className="font-mono text-xs text-muted tabular">
                {education.start} – {education.end}
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">{education.school}</h3>
              <p className="mt-2 max-w-xl text-ink-soft">{education.degree}</p>
              <p className="mt-4 text-sm text-muted">{education.notes.join(" · ")}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Certifications</p>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="text-ink">{c.name}</p>
                    <p className="text-sm text-muted">
                      {c.issuer} · {c.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section index="06" label="Off the clock">
          <div className="grid gap-6 sm:grid-cols-2">
            {offTheClock.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-rule"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
                  <p className="font-serif text-2xl">{item.name} →</p>
                  <p className="mt-1 text-sm text-white/80">{item.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
