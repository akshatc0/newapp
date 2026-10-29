import Link from "next/link";

import { profile } from "@/content/profile";

const SiteFooter = () => {
  return (
    <footer id="contact" className="no-print border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Contact</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block break-all font-serif text-[1.7rem] tracking-tight text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-5xl"
          >
            {profile.email}
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Happy to talk about risk, quantitative finance or future co-op terms.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              GitHub ↗
            </a>
          </li>
          <li>
            <Link href="/photography" className="hover:text-accent">
              Photography
            </Link>
          </li>
          <li>
            <Link href="/music" className="hover:text-accent">
              Music
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between px-4 pb-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:px-8">
        <span>{profile.location}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
