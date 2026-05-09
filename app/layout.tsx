import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Savvy Gorilla Technologies™ | Coming Soon",
  description:
    "Savvy Gorilla Technologies™ is rebuilding its digital platform into a sharper, faster, and more futuristic technology experience.",
  metadataBase: new URL("https://savvygorilla.tech"),
  openGraph: {
    title: "Savvy Gorilla Technologies™ | Coming Soon",
    description:
      "A new intelligence layer is coming soon.",
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
    title: "Savvy Gorilla Technologies™ | Coming Soon",
    description:
      "A new intelligence layer is coming soon.",
    images: ["/logos/savvy-gorilla-og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}