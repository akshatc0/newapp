import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

const description =
  "Math & Financial Analysis and Risk Management student at the University of Waterloo. Incoming Model Quality Intern at Scotiabank; previously fraud and payments risk at Metrolinx.";

export const metadata: Metadata = {
  title: "Akshat Chopra",
  description,
  keywords: ["Akshat Chopra", "University of Waterloo", "FARM", "risk management", "model risk", "fraud analytics"],
  authors: [{ name: "Akshat Chopra" }],
  openGraph: {
    title: "Akshat Chopra",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
