import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./../styles/globals.css";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Savvy Gorilla Technologies™ | Where African Innovation Begins",
  description:
    "Savvy Gorilla Technologies is a modern African holding company powering creative, cultural, and technological solutions across software, media, and impact.",
  metadataBase: new URL("https://savvygorilla.tech"),
  openGraph: {
    title: "Savvy Gorilla Technologies™",
    description:
      "A modern African holding company building products at the intersection of creativity, culture, and technology.",
    url: "https://savvygorilla.tech",
    siteName: "Savvy Gorilla Technologies™",
    type: "website",
    images: [
      {
        url: "/logos/savvy-gorilla-og.png",
        width: 1200,
        height: 630,
        alt: "Savvy Gorilla Technologies™"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Savvy Gorilla Technologies™",
    description:
      "Where African innovation begins — a holding company for software, studios, and stories.",
    images: ["/logos/savvy-gorilla-og.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col bg-black text-white">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
