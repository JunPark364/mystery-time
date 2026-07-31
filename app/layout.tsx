import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kmuSerif = localFont({
  src: "./fonts/KMU80SungkokSerif.woff2",
  variable: "--font-kmu-serif",
});

const gmkBold = localFont({
  src: "./fonts/GMarketSansTTFBold.ttf",
  variable: "--font-gmk-bold",
});

const gmkMedium = localFont({
  src: "./fonts/GMarketSansTTFMedium.ttf",
  variable: "--font-gmk-medium",
});

const gmkLight = localFont({
  src: "./fonts/GMarketSansTTFLight.ttf",
  variable: "--font-gmk-light",
});

export const metadata: Metadata = {
  title: "Mystery Time",
  description: "Mystery Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${kmuSerif.variable} ${gmkBold.variable} ${gmkMedium.variable} ${gmkLight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
