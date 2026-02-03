"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Skiper88 = () => {
  const items = [
    "UWaterloo",
    "Math & Finance",
    "Quant/AI Intern",
    "Debate & Mock Trial Champion",
    "Web Content Developer",
    "Former Cadet",
  ];
  const radius = 150; // radius of the circle in pixels

  const { scrollYProgress } = useScroll();
  const rotateParent = useTransform(scrollYProgress, [0, 1], [-73, 242]);

  return (
    <div className="relative h-[300vh] w-full overflow-hidden bg-[#eee]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <div
          className="relative"
          style={{
            perspective: "500px",
          }}
        >
          <motion.ul
            className="relative w-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX: rotateParent,
            }}
          >
            {items.map((item, index) => {
              const angle = (-180 / items.length) * index; // angle in degrees

              return (
                <li
                  key={index}
                  className="backface-hidden absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl"
                  style={{
                    transform: `rotateX(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {item}
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export { Skiper88 };
export default Skiper88;
