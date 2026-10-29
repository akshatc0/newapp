"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// A single, quiet entrance: content rises a few pixels as it scrolls in.
const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
