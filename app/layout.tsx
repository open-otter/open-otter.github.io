import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "OpenOtter",
    template: "%s | OpenOtter",
  },
  description:
    "OpenOtter is an open-source autonomous RC platform spanning perception, embedded control, and hardware integration.",
  metadataBase: new URL("https://open-otter.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="dark" dir="ltr" lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 font-sans text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
