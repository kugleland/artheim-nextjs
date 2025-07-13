import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AR-T",
  description: "AR-T - kunst skal deles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>
        <main className="max-w-7xl mx-auto  px-6 lg:px-0 relative flex-1 w-full">
          <svg
            className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          {children}
        </main>
        <footer className="bg-neutral-900">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <p className="mt-8 text-center text-sm/6 text-neutral-400 md:order-1 md:mt-0">
              &copy; 2025 AR-T - Alle rettigheder forbeholdes.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
