"use client";

import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";

export interface Job {
  company: string;
  title: string;
  logo: React.ReactNode;
  job_description: string;
  salary: string;
  location: string;
  remote: string;
  job_time: string;
}

export interface JobListingComponentProps {
  jobs: Job[];
  className?: string;
  onJobClick?: (job: Job) => void;
}

// Company Logo Components
export const SephiraLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="50" cy="50" r="45" fill="#1a1a2e" />
    <path
      d="M30 50C30 38.954 38.954 30 50 30C61.046 30 70 38.954 70 50"
      stroke="#4ade80"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M35 50C35 41.716 41.716 35 50 35C58.284 35 65 41.716 65 50"
      stroke="#22c55e"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="50" cy="55" r="8" fill="#4ade80" />
  </svg>
);

export const MississaugaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="12" fill="#003366" />
    <path
      d="M20 70L35 40L50 55L65 35L80 70"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="25" r="8" fill="#ff6b35" />
  </svg>
);

export const KumonLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="12" fill="#0066cc" />
    <text
      x="50"
      y="58"
      textAnchor="middle"
      fill="white"
      fontSize="24"
      fontWeight="bold"
      fontFamily="Arial"
    >
      K
    </text>
    <path
      d="M25 75H75"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const CadetsLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="12" fill="#1e3a5f" />
    <path
      d="M50 20L60 40H40L50 20Z"
      fill="#c41e3a"
    />
    <path
      d="M35 45H65V75H35V45Z"
      fill="#87ceeb"
      stroke="#ffffff"
      strokeWidth="2"
    />
    <circle cx="50" cy="60" r="8" fill="#c41e3a" />
  </svg>
);

export const SACLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="12" fill="#8b0000" />
    <text
      x="50"
      y="62"
      textAnchor="middle"
      fill="white"
      fontSize="20"
      fontWeight="bold"
      fontFamily="Arial"
    >
      SAC
    </text>
  </svg>
);

export default function JobListingComponent({
  jobs,
  className,
  onJobClick,
}: JobListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  useOnClickOutside(ref, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeItem ? (
          <>
            <div className="fixed inset-0 z-20 grid place-items-center p-4">
              <motion.div
                className="flex h-fit w-full max-w-lg cursor-pointer flex-col items-start gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
                ref={ref}
                layoutId={`workItem-${activeItem.company}`}
              >
                <div className="flex w-full items-center gap-4">
                  <motion.div
                    layoutId={`workItemLogo-${activeItem.company}`}
                    className="text-4xl"
                  >
                    {activeItem.logo}
                  </motion.div>
                  <div className="flex grow items-center justify-between">
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex w-full flex-row justify-between gap-0.5">
                        <motion.div
                          className="text-base font-semibold text-neutral-900 dark:text-white"
                          layoutId={`workItemCompany-${activeItem.company}`}
                        >
                          {activeItem.company}
                        </motion.div>
                      </div>
                      <motion.p
                        layoutId={`workItemTitle-${activeItem.company}`}
                        className="text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        {activeItem.title} / {activeItem.salary}
                      </motion.p>
                      <motion.div
                        className="flex flex-row gap-2 text-xs text-neutral-500 dark:text-neutral-400"
                        layoutId={`workItemExtras-${activeItem.company}`}
                      >
                        {activeItem.remote === "Yes" &&
                          ` ${activeItem.location} `}
                        {activeItem.remote === "No" &&
                          ` ${activeItem.location} `}
                        {activeItem.remote === "Hybrid" &&
                          ` ${activeItem.remote} / ${activeItem.location} `}
                        | {activeItem.job_time}
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.p
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                >
                  {activeItem.job_description}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <div className={`relative flex items-start ${className || ""}`}>
        <div className="relative flex w-full flex-col items-center gap-4">
          {jobs.map((role) => (
            <motion.div
              layoutId={`workItem-${role.company}`}
              key={role.company}
              className="group flex w-full cursor-pointer flex-row items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 md:p-5"
              onClick={() => {
                setActiveItem(role);
                if (onJobClick) onJobClick(role);
              }}
            >
              <motion.div
                layoutId={`workItemLogo-${role.company}`}
                className="text-3xl"
              >
                {role.logo}
              </motion.div>
              <div className="flex w-full flex-col items-start justify-between gap-1">
                <motion.div
                  className="font-semibold text-neutral-900 dark:text-white"
                  layoutId={`workItemCompany-${role.company}`}
                >
                  {role.company}
                </motion.div>
                <motion.div
                  className="text-sm text-neutral-600 dark:text-neutral-300"
                  layoutId={`workItemTitle-${role.company}`}
                >
                  {role.title} / {role.salary}
                </motion.div>

                <motion.div
                  className="flex flex-row gap-2 text-xs text-neutral-500 dark:text-neutral-400"
                  layoutId={`workItemExtras-${role.company}`}
                >
                  {role.remote === "Yes" && ` ${role.location} `}
                  {role.remote === "No" && ` ${role.location} `}
                  {role.remote === "Hybrid" &&
                    ` ${role.remote} / ${role.location} `}
                  | {role.job_time}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
