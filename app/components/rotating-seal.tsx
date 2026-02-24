"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  /** Path to a public asset (e.g. /sgt.svg) */
  src?: string;
  /** Accessible label (kept quiet; this is decorative) */
  ariaLabel?: string;
  /** Corner position */
  position?: "br" | "bl" | "tr" | "tl";
  /** Visual size in px */
  size?: number;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export default function RotatingSeal({
  src = "/sgt.svg",
  ariaLabel = "Savvy Gorilla Technologies seal",
  position = "br",
  size = 88,
}: Props) {
  // Tiny “alive” effect: slightly faster rotation while the user is actively scrolling.
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let t: number | null = null;

    const onScroll = () => {
      setScrolling(true);
      if (t) window.clearTimeout(t);
      t = window.setTimeout(() => setScrolling(false), 160);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (t) window.clearTimeout(t);
    };
  }, []);

  const posClass = useMemo(() => {
    if (position === "tr") return "top-5 right-5";
    if (position === "tl") return "top-5 left-5";
    if (position === "bl") return "bottom-5 left-5";
    return "bottom-5 right-5";
  }, [position]);

  const px = clamp(size, 64, 120);

  return (
    <div
      aria-label={ariaLabel}
      className={[
        "wk-seal",
        posClass,
        scrolling ? "wk-seal--active" : "",
      ].join(" ")}
      style={{ width: px, height: px }}
    >
      <div className="wk-seal__ring" aria-hidden="true" />

      {/* The SVG is intentionally soft/quiet until hover */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="wk-seal__mark"
        draggable={false}
      />

      <div className="wk-seal__halo" aria-hidden="true" />
    </div>
  );
}
