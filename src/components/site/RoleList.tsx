import type { Role } from "@/content/profile";

const RoleList = ({ roles }: { roles: Role[] }) => {
  return (
    <ol className="divide-y divide-rule">
      {roles.map((role) => (
        <li key={`${role.org}-${role.start}`} className="grid gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8">
          <p className="font-mono text-xs text-muted tabular sm:pt-1.5">
            {role.start} – {role.end}
          </p>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-2xl leading-snug tracking-tight text-ink">{role.org}</h3>
              {role.upcoming && (
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  Incoming
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-ink-soft">
              {role.title}
              {role.kind && <span className="text-muted"> · {role.kind}</span>}
              {role.location && <span className="text-muted"> · {role.location}</span>}
            </p>
            {role.summary && <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{role.summary}</p>}
            {role.points.length > 0 && (
              <ul className="mt-4 max-w-2xl space-y-2 text-[15px] leading-relaxed text-ink-soft">
                {role.points.map((point) => (
                  <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-muted">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default RoleList;
