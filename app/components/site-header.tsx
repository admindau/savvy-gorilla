"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/innovation", label: "Innovation" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
  { href: "/leadership", label: "Leadership" },
  { href: "/ceo-letter", label: "CEO Letter" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const externalItems = useMemo(
    () => [{ href: "https://foundation.savvygorilla.tech", label: "Foundation", external: true }],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
      setProgress(pct);
      setScrolled(scrollTop > 6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "group sticky top-0 z-40",
        "bg-black/78 backdrop-blur",
        "transition",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      ].join(" ")}
    >
      {/* Sealed clearance strip */}
      <div className="flex items-center justify-between gap-3 px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-white/40 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/40 transition group-hover:bg-accent" />
          <span className="transition group-hover:text-white/60">System online</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="transition group-hover:text-white/60">Clearance: Granted</span>
          <span className="text-white/20">•</span>
          <span className="transition group-hover:text-white/60">Mode: Forge</span>
        </div>
        <div className="md:hidden text-white/30">Granted</div>
      </div>

      {/* Scroll progress (quiet by default; energizes on hover) */}
      <div className="h-[2px] w-full bg-white/10">
        <div
          className="h-[2px] bg-white/35 transition group-hover:bg-accent"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full border border-border bg-black/60 p-[2px] transition group-hover:border-white/20">
            <Image
              src="/logos/savvy-gorilla-white.png"
              alt="Savvy Gorilla Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/45 transition group-hover:text-white/60">
              Savvy Gorilla
            </span>
            <span className="text-xs font-medium text-white/75 transition group-hover:text-white">
              Technologies™
            </span>
          </div>
        </Link>

        {/* Desktop nav (sealed until hover) */}
        <nav className="hidden items-center gap-5 text-xs md:flex">
          <div className="flex items-center gap-5 opacity-75 transition group-hover:opacity-100">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative transition",
                    isActive ? "text-white" : "text-white/45 hover:text-white/85",
                  ].join(" ")}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-white/35 transition group-hover:bg-accent" />
                  )}
                </Link>
              );
            })}

            {externalItems.map((x) => (
              <a
                key={x.href}
                href={x.href}
                target="_blank"
                rel="noreferrer"
                className="transition text-white/45 hover:text-white/85"
              >
                {x.label}
              </a>
            ))}
          </div>
        </nav>
        {/* Decorative revolving seal (top-of-page) */}
        <div className="hidden md:block" aria-hidden="true">
          <div className="wk-orbit">
            <div className="wk-orbit__ring" />
            <Image src="/sgt.svg" alt="" width={28} height={28} className="wk-orbit__mark" priority />
          </div>
        </div>



        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-border bg-black/30 px-4 py-2 text-xs text-white/75 transition hover:border-white/25 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-black/92 backdrop-blur md:hidden">
          <Container className="py-4">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm transition",
                      isActive
                        ? "border-white/20 bg-white/5 text-white"
                        : "border-border bg-black/20 text-white/80 hover:border-white/25 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {externalItems.map((x) => (
                <a
                  key={x.href}
                  href={x.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-border bg-black/20 px-4 py-3 text-sm text-white/80 transition hover:border-white/25 hover:text-white"
                >
                  {x.label} ↗
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
