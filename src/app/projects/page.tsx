import type { Metadata } from "next";

import Reveal from "@/components/site/Reveal";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { projects } from "@/content/profile";

export const metadata: Metadata = {
  title: "Work · Akshat Chopra",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Selected work</p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Things I&apos;ve built, and what they did.
            </h1>
          </Reveal>
        </section>

        {projects.map((project, i) => (
          <article key={project.slug} id={project.slug} className="border-t border-rule">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-[13rem_1fr] md:gap-12 md:py-24">
              <div className="space-y-6">
                <p className="font-mono text-xs text-muted tabular">
                  {String(i + 1).padStart(2, "0")} · {project.start} – {project.end}
                </p>
                <dl className="flex gap-8 md:flex-col md:gap-5">
                  {project.figures.map((f) => (
                    <div key={f.label}>
                      <dd className="font-serif text-4xl tracking-tight text-ink tabular">{f.value}</dd>
                      <dt className="mt-1 text-xs text-muted">{f.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
              <Reveal>
                <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">{project.name}</h2>
                <p className="mt-2 text-muted">{project.tagline}</p>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{project.summary}</p>
                <ul className="mt-8 max-w-2xl space-y-3 leading-relaxed text-ink-soft">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li key={s} className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </article>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
