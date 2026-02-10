"use client";

import { useEffect, useRef, useState } from "react";

const KEYS = [
  { g: "⬡", label: "FORGE", hint: "Hold to sync" },
  { g: "◈", label: "LEDGER", hint: "Hold to link" },
  { g: "△", label: "SIGNAL", hint: "Hold to align" },
  { g: "◉", label: "CONTINUUM", hint: "Hold to unlock" },
];

export default function KeysPanel() {
  const [unlocked, setUnlocked] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const armUnlock = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setUnlocked(true), 1400); // long-press feel
  };

  const disarmUnlock = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-3 text-xs text-white/75">
        {KEYS.map((x) => (
          <button
            key={x.label}
            type="button"
            onMouseEnter={armUnlock}
            onMouseLeave={disarmUnlock}
            onFocus={armUnlock}
            onBlur={disarmUnlock}
            className="wk-scan group flex items-center justify-between rounded-2xl border border-border bg-white/5 px-4 py-3 text-left"
            aria-label={`${x.label} key`}
          >
            <span className="display text-base text-white/80">{x.g}</span>
            <span className="flex flex-col items-end">
              <span className="text-[0.65rem] tracking-[0.22em] text-white/55">
                {x.label}
              </span>
              <span className="text-[0.65rem] text-white/35 opacity-0 transition group-hover:opacity-100">
                {x.hint}
              </span>
            </span>
          </button>
        ))}
      </div>

      {unlocked && (
        <div className="wk-unlock mt-4 rounded-2xl bg-black/40 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="kicker">Vibranium link established</p>
              <p className="mt-2 text-sm text-white/75">
                Observer channel open. Continuity confirmed.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setUnlocked(false)}
              className="rounded-full border border-border bg-white/5 px-3 py-2 text-xs text-white/70 hover:border-white/60 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
