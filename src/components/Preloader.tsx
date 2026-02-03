"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={{
        initial: {
          top: 0,
        },
        exit: {
          top: "-100vh",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
      }}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99] flex h-screen w-screen items-center justify-center bg-neutral-950"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={{
              initial: {
                opacity: 0,
              },
              enter: {
                opacity: 1,
                transition: { duration: 1, delay: 0.2 },
              },
            }}
            className="absolute z-10 flex items-center text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl"
            initial="initial"
            animate="enter"
          >
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-neutral-950"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
