import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Reveal from "./Reveal";

// Annual-report layout: a narrow label column on the left, content on the
// right. Collapses to a single column below md.
const Section = ({
  id,
  index,
  label,
  children,
  className,
}: {
  id?: string;
  index?: string;
  label: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section id={id} className={cn("border-t border-rule", className)}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-8 md:grid-cols-[13rem_1fr] md:gap-12 md:py-24">
        <div className="flex items-baseline gap-3 md:block">
          {index && <p className="font-mono text-xs text-muted tabular">{index}</p>}
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink md:mt-2">{label}</h2>
        </div>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
};

export default Section;
