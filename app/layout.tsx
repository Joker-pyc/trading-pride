import type React from "react";
import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Poppins,
  Source_Sans_3,
  Playfair_Display,
  Montserrat,
  Orbitron,
} from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

// Primary font: Poppins - Scientifically proven for financial trust and readability
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});

// Secondary font: Source Sans 3 - Excellent for body text and data readability
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-secondary",
  display: "swap",
});

// Monospace font: JetBrains Mono - Perfect for financial data and code
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Premium brand font: Playfair Display - Elegant serif for "Trading Pride"
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand",
  display: "swap",
});

// Modern tech font: Orbitron - Futuristic for financial technology
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-tech",
  display: "swap",
});

// Professional sans: Montserrat - Clean and authoritative
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-professional",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trading Pride - Learn Trading with Discipline & Strategy",
  description:
    "Master the markets with expert mentorship from Mr. Sarvendra Shrivastava. Professional trading education for Indian traders.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${sourceSans.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${orbitron.variable} ${montserrat.variable}`}
    >
      <body className="font-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
