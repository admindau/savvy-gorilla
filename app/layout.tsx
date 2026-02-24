import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./../styles/globals.css";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import RotatingSeal from "./components/rotating-seal";
import ScrollProgress from "./components/scroll-progress";

export const metadata: Metadata = {
  title: "Savvy Gorilla Technologies™ | The Forge for African Systems",
  description:
    "Savvy Gorilla Technologies™ builds long-term engines at the intersection of finance, data, and infrastructure — designed for clarity, resilience, and scale.",
  metadataBase: new URL("https://savvygorilla.tech"),
  openGraph: {
    title: "Savvy Gorilla Technologies™",
    description:
      "The Forge for African Systems — finance, AI, data, and infrastructure.",
    url: "https://savvygorilla.tech",
    siteName: "Savvy Gorilla Technologies™",
    type: "website",
    images: [
      {
        url: "/logos/savvy-gorilla-og.png",
        width: 1200,
        height: 630,
        alt: "Savvy Gorilla Technologies™",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savvy Gorilla Technologies™",
    description:
      "The Forge for African Systems — finance, AI, data, and infrastructure.",
    images: ["/logos/savvy-gorilla-og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-black text-white">
        <ScrollProgress placement="top" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
