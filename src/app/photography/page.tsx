"use client";

import Link from "next/link";
import InfiniteCanvas from "@/components/InfiniteCanvas";

const photographyImages = [
  "/images/photography/img1.png",
  "/images/photography/img2.png",
  "/images/photography/img3.png",
  "/images/photography/img4.png",
  "/images/photography/img5.png",
  "/images/photography/img6.png",
  "/images/photography/img7.png",
  "/images/photography/img8.png",
  "/images/photography/img9.png",
  "/images/photography/img10.png",
  "/images/photography/img11.png",
  "/images/photography/img12.png",
  "/images/photography/img13.png",
  "/images/photography/img14.png",
  "/images/photography/img15.png",
];

export default function PhotographyPage() {
  return (
    <main className="relative min-h-screen w-full bg-neutral-950">
      {/* Back Button */}
      <Link
        href="/"
        className="fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Home
      </Link>

      {/* Infinite Canvas Gallery */}
      <InfiniteCanvas
        images={photographyImages}
        imageClassName="w-[45vw] lg:w-[20vw]"
        gap="3vw"
      />

      {/* Hint */}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <p className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/60 backdrop-blur-sm">
          Drag or scroll to explore
        </p>
      </div>
    </main>
  );
}
