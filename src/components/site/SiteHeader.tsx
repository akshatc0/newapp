import Link from "next/link";

import { profile } from "@/content/profile";

const links = [
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/#contact" },
];

const SiteHeader = () => {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link href="/" className="font-serif text-lg font-medium tracking-tight text-ink sm:text-xl">
          {profile.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm text-muted sm:gap-7">
            {links.map((link) => (
              <li key={link.href} className={link.name === "Experience" ? "hidden sm:block" : undefined}>
                <Link href={link.href} className="transition-colors hover:text-ink">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
