"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/innovation", label: "Innovation" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-black/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full border border-border/70 bg-black/60 p-[2px]">
            <Image
              src="/logos/savvy-gorilla-white.png"
              alt="Savvy Gorilla Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
              Savvy Gorilla
            </span>
            <span className="text-xs font-medium text-gray-200">
              Technologies™
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-white/70" />
                )}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
