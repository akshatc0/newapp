"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Skiper88 = () => {
  const items = [
    "UWaterloo Math & Finance",
    "Finance & AI Intern",
    "Former Founder",
    "Analyst",
    "Student Leader",
    "Mock Trial Champion",
    "Amateur Photographer",
    "Aviation Enthusiast",
    "Audiophile",
  ];
  const radius = 150; // radius of the circle in pixels

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const rotateParent = useTransform(scrollYProgress, [0, 1], [-73, 242]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[#eee]">
      <div
        className="sticky top-0 flex h-screen w-full items-center justify-center"
        style={{
          perspective: "500px",
        }}
      >
        <motion.div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            rotateX: rotateParent,
          }}
        >
          {items.map((item, index) => {
            const angle = (-180 / items.length) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl"
                style={{
                  transform: `rotateX(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {item}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export { Skiper88 };
export default Skiper88;
