"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import ParallaxGallery from "@/components/ParallaxGallery";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown this session
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    
    if (!hasSeenPreloader) {
      setShowPreloader(true);
      sessionStorage.setItem("hasSeenPreloader", "true");
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // Disable scrolling during preloader
    if (showPreloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (!showPreloader) return;

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [showPreloader]);

  // Don't render anything until we've checked sessionStorage
  if (!isInitialized) {
    return <main className="min-h-screen w-full bg-neutral-950" />;
  }

  return (
    <main className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {showPreloader && <Preloader />}
      </AnimatePresence>
      
      <div className={showPreloader ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <ParallaxGallery />
      </div>
    </main>
  );
}
