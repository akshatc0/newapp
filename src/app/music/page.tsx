"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type Album = {
  id: number;
  name: string;
  artist: string;
  badge: string;
  bgColor: string;
  image: string;
};

const albums: Album[] = [
  {
    id: 0,
    name: "Scorpion",
    artist: "Drake",
    badge: "Hip-Hop",
    bgColor: "#1a1a1a",
    image: "/images/albums/00602567892410.rgb-be61cdad-0139-4347-8631-fd9ef13b7415.png",
  },
  {
    id: 1,
    name: "F1 The Album",
    artist: "Various Artists",
    badge: "Soundtrack",
    bgColor: "#e65c00",
    image: "/images/albums/075679610720-2051aac9-8808-483b-ad97-b9c0ecb7b8bc.png",
  },
  {
    id: 2,
    name: "Honestly, Nevermind",
    artist: "Drake",
    badge: "Dance",
    bgColor: "#7c3aed",
    image: "/images/albums/22UMGIM67371.rgb-664149fe-d7a6-4a53-a5c9-6a3384d55ee3.png",
  },
  {
    id: 3,
    name: "Un Verano Sin Ti",
    artist: "Bad Bunny",
    badge: "Reggaeton",
    bgColor: "#f472b6",
    image: "/images/albums/196626945068-4da05318-c744-4a3c-9129-0b68a4a1c96f.png",
  },
  {
    id: 4,
    name: "Hurry Up Tomorrow",
    artist: "The Weeknd",
    badge: "R&B",
    bgColor: "#d4a574",
    image: "/images/albums/25UMGIM09490.rgb-5fa71703-a3f9-4b13-9b9e-dab32aecd5c3.png",
  },
  {
    id: 5,
    name: "DeBÍ TiRAR MáS FOToS",
    artist: "Bad Bunny",
    badge: "Salsa",
    bgColor: "#22c55e",
    image: "/images/albums/199066342442-48e0f5f2-684f-439a-90fb-e4c982100031.png",
  },
  {
    id: 6,
    name: "So Close to What",
    artist: "Tate McRae",
    badge: "Pop",
    bgColor: "#a1887f",
    image: "/images/albums/196872870299-8f54f987-e8f1-441d-aedc-6f2c46243165.png",
  },
  {
    id: 12,
    name: "Eternal Sunshine",
    artist: "Ariana Grande",
    badge: "Pop",
    bgColor: "#1a3a3a",
    image: "/images/albums/25UMGIM42095.rgb-b1cd32b9-eb39-4d1d-b530-cdc9dc60d0a1.png",
  },
  {
    id: 7,
    name: "Starboy",
    artist: "The Weeknd",
    badge: "R&B",
    bgColor: "#dc2626",
    image: "/images/albums/16UMGIM67863.rgb-832f5b16-9eb0-4954-8fd2-f115f043ce5c.png",
  },
  {
    id: 8,
    name: "Reputation",
    artist: "Taylor Swift",
    badge: "Pop",
    bgColor: "#374151",
    image: "/images/albums/17UM1IM24651.rgb-20b0845f-0a59-4cb3-a95b-dc31f040a119.png",
  },
  {
    id: 9,
    name: "Can't Rush Greatness",
    artist: "Central Cee",
    badge: "UK Rap",
    bgColor: "#9ca3af",
    image: "/images/albums/196872591545-980e77bb-ad82-4afb-a5f5-318478f84460.png",
  },
  {
    id: 10,
    name: "Views",
    artist: "Drake",
    badge: "Hip-Hop",
    bgColor: "#64748b",
    image: "/images/albums/16UMGIM27642.rgb-be0ad562-305d-4d3b-9ce0-ca1e8db2d69e.png",
  },
  {
    id: 11,
    name: "Black Panther",
    artist: "Kendrick Lamar",
    badge: "Soundtrack",
    bgColor: "#0a0a0a",
    image: "/images/albums/18UMGIM00001.rgb-4c36cbd8-403e-4ca5-acc7-7f2ab92d3d76.png",
  },
  {
    id: 13,
    name: "No. 6 Collaborations Project",
    artist: "Ed Sheeran",
    badge: "Pop",
    bgColor: "#e5e5e5",
    image: "/images/albums/ed-sheeran-no6.png",
  },
  {
    id: 14,
    name: "No Broke Boys",
    artist: "Disco Lines & Tinashe",
    badge: "Dance",
    bgColor: "#8ec8e8",
    image: "/images/albums/no-broke-boys.png",
  },
  {
    id: 15,
    name: "Some Sexy Songs 4 U",
    artist: "Drake",
    badge: "R&B",
    bgColor: "#1a2a3a",
    image: "/images/albums/drake-sss4u.png",
  },
  {
    id: 16,
    name: "More Life",
    artist: "Drake",
    badge: "Hip-Hop",
    bgColor: "#0a0a0a",
    image: "/images/albums/drake-more-life.png",
  },
  {
    id: 17,
    name: "1989 (Taylor's Version)",
    artist: "Taylor Swift",
    badge: "Pop",
    bgColor: "#87ceeb",
    image: "/images/albums/taylor-swift-1989.png",
  },
  {
    id: 18,
    name: "The Boy Who Played the Harp",
    artist: "Dave",
    badge: "UK Rap",
    bgColor: "#c4a35a",
    image: "/images/albums/dave-harp.png",
  },
  {
    id: 19,
    name: "Free Spirit",
    artist: "Khalid",
    badge: "R&B",
    bgColor: "#e8a030",
    image: "/images/albums/khalid-free-spirit.png",
  },
  {
    id: 20,
    name: "F-1 Trillion",
    artist: "Post Malone",
    badge: "Country",
    bgColor: "#87ceeb",
    image: "/images/albums/post-malone-f1.png",
  },
  {
    id: 21,
    name: "Hollywood's Bleeding",
    artist: "Post Malone",
    badge: "Hip-Hop",
    bgColor: "#1a3a4a",
    image: "/images/albums/post-malone-hollywoods-bleeding.png",
  },
  {
    id: 22,
    name: "Where She Goes",
    artist: "Bad Bunny",
    badge: "Reggaeton",
    bgColor: "#2a3a5a",
    image: "/images/albums/bad-bunny-where-she-goes.png",
  },
  {
    id: 23,
    name: "2014 Forest Hills Drive",
    artist: "J. Cole",
    badge: "Hip-Hop",
    bgColor: "#4a6a5a",
    image: "/images/albums/jcole-2014-fhd.png",
  },
  {
    id: 24,
    name: "Astroworld",
    artist: "Travis Scott",
    badge: "Hip-Hop",
    bgColor: "#87ceeb",
    image: "/images/albums/travis-scott-astroworld.png",
  },
  {
    id: 25,
    name: "C, XOXO",
    artist: "Camila Cabello",
    badge: "Pop",
    bgColor: "#1a4a7a",
    image: "/images/albums/camila-cabello-cxoxo.png",
  },
  {
    id: 26,
    name: "HARDSTONE PSYCHO",
    artist: "Don Toliver",
    badge: "Hip-Hop",
    bgColor: "#2a3a4a",
    image: "/images/albums/don-toliver-hardstone.png",
  },
];

export default function MusicPage() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full">
      <AnimatePresence>{showPreloader && <MusicPreloader />}</AnimatePresence>
      {!showPreloader && <AlbumScrollList albums={albums} />}
    </main>
  );
}

interface AlbumScrollListProps {
  albums: Album[];
  className?: string;
  showPreview?: boolean;
  previewSize?: "sm" | "md" | "lg";
  infiniteScroll?: boolean;
  scrollThreshold?: number;
}

const AlbumScrollList = ({
  albums,
  className = "",
  showPreview = true,
  previewSize = "lg",
  infiniteScroll = true,
  scrollThreshold = 1000,
}: AlbumScrollListProps) => {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [archiveList, setArchiveList] = useState<Album[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const isLoadingRef = useRef(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Generate initial archive list
  useEffect(() => {
    if (!infiniteScroll) {
      setArchiveList(albums);
      return;
    }

    const generateArchiveList = (count: number) => {
      const initialSet: Album[] = [];
      for (let i = 0; i < count; i++) {
        albums.forEach((album, j) => {
          initialSet.push({
            ...album,
            id: i * albums.length + j,
          });
        });
      }
      return initialSet;
    };

    setArchiveList(generateArchiveList(5));
  }, [albums, infiniteScroll]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (!infiniteScroll || isLoadingRef.current) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - scrollThreshold) {
      isLoadingRef.current = true;

      setTimeout(() => {
        setArchiveList((prevList) => {
          const currentLength = prevList.length;
          const newItems: Album[] = [];

          for (let i = 0; i < 3; i++) {
            albums.forEach((album, j) => {
              newItems.push({
                ...album,
                id: (currentLength / albums.length + i) * albums.length + j,
              });
            });
          }

          return [...prevList, ...newItems];
        });

        isLoadingRef.current = false;
      }, 500);
    }
  }, [albums, infiniteScroll, scrollThreshold]);

  // Add scroll listener
  useEffect(() => {
    if (!infiniteScroll) return;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, infiniteScroll]);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    itemRefs.current = itemRefs.current.slice(0, archiveList.length);

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      ScrollTrigger.create({
        trigger: item,
        start: "top 70%",
        end: "top 65%",
        markers: false,
        onEnter: () => {
          const actualIndex = index % albums.length;
          setCurrentAlbumIndex(actualIndex);
          setActiveIndex(index);
        },
        onEnterBack: () => {
          const actualIndex = index % albums.length;
          setCurrentAlbumIndex(actualIndex);
          setActiveIndex(index);
        },
      });

      gsap.to(item, {
        repeat: 1,
        yoyo: true,
        ease: "none",
        scrollTrigger: {
          scroller: containerRef.current,
          trigger: item,
          start: "center bottom",
          end: "center top",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [archiveList, albums.length]);

  const currentAlbum = albums[currentAlbumIndex];

  const getPreviewSize = () => {
    switch (previewSize) {
      case "sm":
        return "h-[200px] w-[200px]";
      case "md":
        return "h-[280px] w-[280px]";
      case "lg":
        return "h-[350px] w-[350px]";
      default:
        return "h-[350px] w-[350px]";
    }
  };

  // Determine text color based on background brightness
  const getTextColor = (bgColor: string) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "text-black" : "text-white";
  };

  const textColor = getTextColor(currentAlbum?.bgColor || "#ffffff");

  return (
    <motion.div
      className={cn("archive w-screen", className)}
      ref={containerRef}
      style={{ backgroundColor: currentAlbum?.bgColor, minHeight: "100vh" }}
      animate={{ backgroundColor: currentAlbum?.bgColor }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Back to Home Link */}
        <motion.a
          href="/"
          className={cn(
            "fixed left-6 top-6 z-50 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20",
            textColor
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Home
        </motion.a>

        {/* Preview Image */}
        {showPreview && (
          <div className="fixed bottom-6 right-6 z-50 hidden md:block lg:bottom-10 lg:right-10">
            <motion.div
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              className={cn(
                "cursor-grab overflow-hidden rounded-2xl shadow-2xl active:cursor-grabbing lg:rounded-3xl",
                getPreviewSize(),
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.img
                key={currentAlbum?.image}
                ref={previewRef}
                src={currentAlbum?.image}
                className="pointer-events-none h-full w-full object-cover"
                alt={currentAlbum?.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        )}

        {/* Album List */}
        <div className="flex flex-col gap-4 whitespace-nowrap pb-[50vh] pt-[40vh] sm:gap-6">
          {archiveList.map((album, index) => {
            const isActive = index === activeIndex;
            const opacity = isActive ? 1 : 0.25;
            return (
              <div
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="project-item z-5 w-full py-2 transition-opacity duration-300 hover:opacity-100"
                key={`${album.id}-${index}`}
                style={{ opacity }}
              >
                <div className="mx-auto w-full">
                  <div className={cn(
                    "flex w-full cursor-pointer flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10 lg:justify-start",
                    textColor
                  )}>
                    <h1 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                      {album.name}
                    </h1>
                    <div className="flex items-center gap-3 sm:gap-6">
                      <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                        {album.badge}
                      </span>
                      <p className="text-xs opacity-60 sm:text-sm">{album.artist}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const MusicPreloader = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const shuffle = (a: number[]) => {
    const shuffled = [...a];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getCenteredBlocks = () => {
    if (!isClient) return [];

    const { width: innerWidth, height: innerHeight } = dimensions;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className="h-[5vw] w-full border-[0.2px] border-white bg-[#f5f5f5]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0, delay: 0.03 * randomIndex }}
        custom={randomIndex}
      />
    ));
  };

  return (
    <motion.div className="fixed inset-0 z-50 bg-white">
      <motion.div
        className="fixed left-1/2 z-40 flex min-h-screen w-screen -translate-x-1/2 flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="fixed z-0 size-[400px] bg-neutral-100 blur-2xl" />
        <div className="relative z-10 font-sans text-2xl tracking-tight text-black/80 sm:text-3xl md:text-4xl">
          <h1 className="text-center">here are my</h1>
          <h1 className="relative z-10 text-center">favourites</h1>
          <Stroke className="absolute -right-4 top-[2.8rem] stroke-neutral-300 sm:top-[3.3rem] md:top-[4rem]" />
        </div>
        <div className="mt-32 block md:hidden" />
      </motion.div>

      <div className="pointer-events-none fixed inset-0 z-[2] flex">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="flex w-[5vw] flex-col">
            {getCenteredBlocks()}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Stroke = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="128"
      height="21"
      viewBox="0 0 128 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_592)">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          d="M2.12988 2.1001L58.1362 2.1001L127.805 8.4001L31.6326 10.5001L90.1184 18.9001L65.0899 18.9001"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_592">
          <rect width="128" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
