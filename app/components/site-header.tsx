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
    <header className="border-b border-border/80 bg-black/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src="/logos/savvy-gorilla-white.png"
              alt="Savvy Gorilla Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">
            Savvy Gorilla Technologies
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-gray-200 ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
