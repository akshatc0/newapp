"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "./Typewriter";
import NavigationMenu from "./NavigationMenu";

const images = [
  "/images/CLIM8206-fc102533-c390-4cb7-ad04-468e0f1a6206.png",
  "/images/IMG_8835-6dfd4f71-d79a-4a7d-8d4b-59bea5dd25a9.png",
  "/images/IMG_2926-ba80bbfb-d84b-4983-b1df-ccf94f9d29d0.png",
  "/images/IMG_1288-946ab69a-af44-4b94-be9a-92e22bce9211.png",
  "/images/IMG_1483-a7efa616-eacd-44a3-b446-6dc102c615df.png",
  "/images/IMG_1273-e596b4fe-f53a-4840-825c-d6c22f24b234.png",
  "/images/IMG_1516-7bd33878-ce5f-4908-be55-5cc8b8f8e0aa.png",
  "/images/IMG_1536-5a44f089-ae05-4bcf-a712-8ec0b5c35843.png",
  "/images/IMG_2263-fdc1966e-3054-4d5e-b35c-5a43c64f8c4f.png",
  "/images/3587ec56-3b94-4b9a-a7a6-10a3f0a0c127-3ed2fcaf-0644-42d8-8865-ce92be742c3f.png",
  "/images/IMG_4729-ab7da24e-7f63-428f-bdc4-4b25373fd655.png",
  "/images/image454454-904d05c3-c0fd-4bcd-a91c-20fcff5b724f.png",
];

// Distribute images into columns based on column count
const getColumns = (columnCount: number) => {
  const columns: string[][] = Array.from({ length: columnCount }, () => []);
  images.forEach((image, index) => {
    columns[index % columnCount].push(image);
  });
  return columns;
};

// Different vertical offsets for visual variety
const columnOffsets = ["-45%", "-95%", "-45%", "-75%"];

const ParallaxGallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [columnCount, setColumnCount] = useState(4);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height, width } = dimension;
  
  // Parallax transforms with varying speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  
  const yTransforms = [y1, y2, y3, y4];

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      const w = window.innerWidth;
      setDimension({ width: w, height: window.innerHeight });
      
      // Responsive column count
      if (w < 640) {
        setColumnCount(2); // Mobile: 2 columns
      } else if (w < 1024) {
        setColumnCount(3); // Tablet: 3 columns
      } else {
        setColumnCount(4); // Desktop: 4 columns
      }
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const columns = getColumns(columnCount);

  return (
    <main className="w-full bg-[#eee] text-black">
      {/* Hero Section */}
      <div className="flex h-screen items-center justify-center px-6">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Hello, 👋 I&apos;m{" "}
          <Typewriter
            text="Akshat"
            loop={false}
            speed={80}
            initialDelay={500}
            showCursor={true}
            cursorChar="|"
            cursorClassName="ml-1 text-neutral-400"
          />
        </h1>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
      >
        {columns.map((columnImages, index) => (
          <Column
            key={index}
            images={columnImages}
            y={yTransforms[index % yTransforms.length]}
            offset={columnOffsets[index % columnOffsets.length]}
            columnCount={columnCount}
          />
        ))}
      </div>

      {/* Navigation Menu Section */}
      <NavigationMenu />
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  offset: string;
  columnCount: number;
};

const Column = ({ images, y, offset, columnCount }: ColumnProps) => {
  // Calculate width based on column count
  const widthClass = columnCount === 2 
    ? "w-1/2" 
    : columnCount === 3 
    ? "w-1/3" 
    : "w-1/4";

  return (
    <motion.div
      className={`relative flex h-full flex-col gap-[2vw] ${widthClass}`}
      style={{ y, top: offset }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;
