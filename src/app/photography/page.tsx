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
  "/images/photography/img16.png",
  "/images/photography/img17.png",
  "/images/photography/img18.png",
  "/images/photography/img19.png",
  "/images/photography/img20.png",
  "/images/photography/img21.png",
  "/images/photography/img22.png",
  "/images/photography/img23.png",
  "/images/photography/img24.png",
  "/images/photography/img25.png",
  "/images/photography/img26.png",
  "/images/photography/img27.png",
  "/images/photography/img28.png",
  "/images/photography/img29.png",
  "/images/photography/img30.png",
  "/images/photography/img31.png",
  "/images/photography/img32.png",
  "/images/photography/img33.png",
  "/images/photography/img34.png",
  "/images/photography/img35.png",
  "/images/photography/img36.png",
  "/images/photography/img37.png",
  "/images/photography/img38.png",
  "/images/photography/img39.png",
  "/images/photography/img40.png",
  "/images/photography/img41.png",
  "/images/photography/img42.png",
  "/images/photography/img43.png",
  "/images/photography/img44.png",
  "/images/photography/img45.png",
  "/images/photography/img46.png",
  "/images/photography/img47.png",
  "/images/photography/img48.png",
  "/images/photography/img49.png",
  "/images/photography/img50.png",
  "/images/photography/img51.png",
  "/images/photography/img52.png",
  "/images/photography/img53.png",
  "/images/photography/img54.png",
  "/images/photography/img55.png",
  "/images/photography/img56.png",
  "/images/photography/img57.png",
  "/images/photography/img58.png",
  "/images/photography/img59.png",
  "/images/photography/img60.png",
  "/images/photography/img61.png",
  "/images/photography/img62.png",
  "/images/photography/img63.png",
  "/images/photography/img64.png",
  "/images/photography/img65.png",
  "/images/photography/img66.png",
  "/images/photography/img67.png",
  "/images/photography/img68.png",
  "/images/photography/img69.png",
  "/images/photography/img70.png",
  "/images/photography/img71.png",
  "/images/photography/img72.png",
  "/images/photography/img73.png",
  "/images/photography/img74.png",
  "/images/photography/img75.png",
  "/images/photography/img76.png",
  "/images/photography/img77.png",
  "/images/photography/img78.png",
  "/images/photography/img79.png",
  "/images/photography/img80.png",
  "/images/photography/img81.png",
  "/images/photography/img82.png",
  "/images/photography/img83.png",
  "/images/photography/img84.png",
  "/images/photography/img85.png",
  "/images/photography/img86.png",
  "/images/photography/img87.png",
  "/images/photography/img88.png",
  "/images/photography/img89.png",
  "/images/photography/img90.png",
  "/images/photography/img91.png",
  "/images/photography/img92.png",
  "/images/photography/img93.png",
  "/images/photography/img94.png",
  "/images/photography/img95.png",
  "/images/photography/img96.png",
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
