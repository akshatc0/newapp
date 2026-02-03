import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Akshat Chopra | Developer & Designer",
  description: "A passionate developer crafting beautiful digital experiences. Specializing in modern web applications with attention to detail and user experience.",
  keywords: ["developer", "web development", "portfolio", "react", "next.js", "typescript"],
  authors: [{ name: "Akshat Chopra" }],
  openGraph: {
    title: "Akshat Chopra | Developer & Designer",
    description: "A passionate developer crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
