"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
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
          <h1 className="text-lg font-semibold text-white">Projects</h1>
          <div className="w-16" />
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-6 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <svg
              className="h-16 w-16 text-neutral-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Coming Soon
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Exciting projects are in the works. Stay tuned.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
