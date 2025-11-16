import "./../styles/globals.css";
import type { ReactNode } from "react";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

export const metadata = {
  title: "Savvy Gorilla Technologies™ | Where African Innovation Begins",
  description:
    "Savvy Gorilla Technologies is a modern African holding company powering creative, cultural, and technological solutions.",
  metadataBase: new URL("https://savvygorilla.tech")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-black text-white">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
