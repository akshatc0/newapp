import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteHeader from "@/components/site/SiteHeader";
import {
  certifications,
  education,
  experience,
  honours,
  leadership,
  profile,
  projects,
  skills,
  type Role,
} from "@/content/profile";

import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume · Akshat Chopra",
};

// Rendered from the same content as the rest of the site, so the resume can
// never drift out of date. "Save as PDF" prints this page to a one-pager.
export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16 print:max-w-none print:p-0">
        <div className="no-print mb-10 flex items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Resume</p>
          <PrintButton />
        </div>

        <article className="rounded-xl border border-rule bg-paper-raised p-6 sm:p-10 print:border-0 print:p-0 print:text-[9pt] print:leading-snug">
          <header className="border-b border-rule pb-5 text-center">
            <h1 className="font-serif text-4xl tracking-tight text-ink print:text-3xl">{profile.name}</h1>
            <p className="mt-2 text-sm text-muted">
              {profile.location} · {profile.email} · linkedin.com/in/akshatc1
            </p>
          </header>

          <Block title="Education">
            <Entry
              left={education.school}
              right={`${education.start} – ${education.end}`}
              sub={education.degree}
            />
            <p className="mt-1 text-sm text-ink-soft">{education.notes.join(" · ")}</p>
          </Block>

          <Block title="Experience">
            {experience.map((role) => (
              <RoleEntry key={role.org} role={role} />
            ))}
          </Block>

          <Block title="Projects">
            {projects.map((p) => (
              <div key={p.slug} className="break-inside-avoid">
                <Entry left={p.name} right={`${p.start} – ${p.end}`} sub={`${p.tagline} · ${p.stack.join(", ")}`} />
                <Bullets points={p.points} />
              </div>
            ))}
          </Block>

          <Block title="Leadership">
            {leadership.slice(0, 2).map((role) => (
              <RoleEntry key={role.org} role={role} />
            ))}
          </Block>

          <Block title="Honours & certifications">
            <p className="text-sm leading-relaxed text-ink-soft">
              {honours
                .slice(0, 6)
                .map((h) => `${h.name} (${h.date})`)
                .join(" · ")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {certifications.map((c) => `${c.name}, ${c.issuer}`).join(" · ")}
            </p>
          </Block>

          <Block title="Skills">
            {skills.map((s) => (
              <p key={s.group} className="text-sm text-ink-soft">
                <span className="font-medium text-ink">{s.group}:</span> {s.items.join(", ")}
              </p>
            ))}
          </Block>
        </article>
      </main>
    </>
  );
}

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-6 space-y-4 print:mt-3 print:space-y-2">
    <h2 className="border-b border-rule pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
      {title}
    </h2>
    {children}
  </section>
);

const Entry = ({ left, right, sub }: { left: string; right: string; sub?: string }) => (
  <div>
    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 className="font-medium text-ink">{left}</h3>
      <p className="font-mono text-xs text-muted tabular">{right}</p>
    </div>
    {sub && <p className="text-sm italic text-ink-soft">{sub}</p>}
  </div>
);

const RoleEntry = ({ role }: { role: Role }) => (
  <div className="break-inside-avoid">
    <Entry
      left={role.org}
      right={`${role.start} – ${role.end}`}
      sub={[role.title, role.location].filter(Boolean).join(" · ")}
    />
    {role.summary && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{role.summary}</p>}
    <Bullets points={role.points} />
  </div>
);

const Bullets = ({ points }: { points: string[] }) =>
  points.length > 0 ? (
    <ul className="mt-1.5 list-disc space-y-1 pl-5 print:space-y-0 text-sm leading-relaxed text-ink-soft marker:text-muted">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  ) : null;
