import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import SideArt from "@/components/common/SideArt";
import SideIndex from "@/components/common/SideIndex";
import Footer from "@/components/common/Footer";
import SwordScroll from "@/components/common/SwordScroll";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

import { siteUrl } from "@/lib/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-cinzel",
});

const siteTitle = "Ankur Kharb — Backend Developer";
const siteDescription =
  "Backend developer building production APIs, async pipelines and AI products with Node.js, Django and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/brand.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ankur Kharb",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0908",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      {/* One theme only: the `dark` class stays on so every `dark:` utility
          in the shared components resolves against the Guts palette. */}
      <html lang="en" className={`dark ${cinzel.variable}`}>
        <body className="font-hanken-grotesk dotted-bg text-[16px] antialiased">
          <ReactLenis root>
            {/* Blueprint rules: dotted verticals flanking the content
                column, */}
            <div
              aria-hidden="true"
              className="page-rule left-1/2 hidden -translate-x-[384px] md:block"
            />
            <div
              aria-hidden="true"
              className="page-rule left-1/2 hidden translate-x-[384px] md:block"
            />
            <SideArt side="left" src="/assets/guts-left.jpg" />
            <SideArt side="right" src="/assets/guts-right.jpg" />
            <SideIndex />
            {children}

            <Footer />
          </ReactLenis>
          <SwordScroll />
        </body>
      </html>
    </ViewTransitions>
  );
}
