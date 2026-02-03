"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Home",
    href: "/",
    external: false,
  },
  {
    name: "Resume",
    href: "/resume",
    external: false,
  },
  {
    name: "Projects",
    href: "/projects",
    external: false,
  },
  {
    name: "Music",
    href: "/music",
    external: false,
  },
  {
    name: "Photography",
    href: "/photography",
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akshatc1/",
    external: true,
  },
];

const NavigationMenu = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-neutral-950 px-6 py-20">
      <ul className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 sm:gap-6">
        {navigationItems.map((item, index) => (
          <li
            className="relative flex cursor-pointer flex-col items-center overflow-visible"
            key={index}
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-start"
              >
                <TextRoll
                  center
                  className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-white transition-colors sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {item.name}
                </TextRoll>
              </a>
            ) : (
              <Link href={item.href} className="relative flex items-start">
                <TextRoll
                  center
                  className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-white transition-colors sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {item.name}
                </TextRoll>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

export { NavigationMenu, TextRoll };
export default NavigationMenu;
