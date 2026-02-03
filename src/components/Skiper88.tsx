"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Skiper88 = () => {
  const items = [
    "UWaterloo",
    "Math & Finance",
    "Quant/AI Intern",
    "Debate & Mock Trial Champion",
    "Web Content Developer",
    "Former Cadet",
  ];
  const radius = 200; // radius of the circle in pixels

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const rotateParent = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-[#eee]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center">
        <div
          style={{
            perspective: "1000px",
            perspectiveOrigin: "center center",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              rotateX: rotateParent,
            }}
          >
            {items.map((item, index) => {
              const angle = (360 / items.length) * index;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 flex items-center justify-center whitespace-nowrap text-4xl font-semibold tracking-tighter text-neutral-900 md:text-5xl lg:text-6xl"
                  style={{
                    transform: `translateX(-50%) translateY(-50%) rotateX(${angle}deg) translateZ(${radius}px)`,
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
    </div>
  );
};

export { Skiper88 };
export default Skiper88;
