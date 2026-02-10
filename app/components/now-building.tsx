"use client";

import { useEffect, useMemo, useState } from "react";
import { NOW_BUILDING, type NowBuildingItem } from "../content/now-building";

function statusPillClass(status: NowBuildingItem["status"]) {
  if (status === "Live") return "border border-border bg-muted/60 text-white/90";
  if (status === "In Progress") return "border border-border bg-muted/60 text-white/90";
  return "border border-border bg-black/20 text-white/70";
}

export default function NowBuilding({ autoRotate = true }: { autoRotate?: boolean }) {
  const items = useMemo(() => NOW_BUILDING, []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;
    if (items.length <= 1) return;

    const id = window.setInterval(() => setActive((v) => (v + 1) % items.length), 4200);
    return () => window.clearInterval(id);
  }, [autoRotate, items.length]);

  const current = items[active];

  return (
    <div className="group rounded-3xl border border-border bg-muted/30 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white/55 transition group-hover:bg-accent" />
          </span>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/55">
            Now building
          </p>
        </div>

        <span className={`rounded-full px-3 py-1 text-[0.7rem] ${statusPillClass(current.status)}`}>
          {current.status}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold text-white">{current.title}</p>
      {current.note && <p className="mt-1 text-xs text-white/70">{current.note}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {current.href && (
          <a
            href={current.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit text-[0.75rem] font-medium text-white/75 underline underline-offset-4 hover:text-white"
          >
            View ↗
          </a>
        )}

        {current.updated && (
          <span className="text-[0.7rem] text-white/55">
            Updated: <span className="text-white/75">{current.updated}</span>
          </span>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setActive(idx)}
              className={`rounded-full px-3 py-1 text-[0.7rem] transition ${
                idx === active
                  ? "border border-white/25 bg-white/5 text-white"
                  : "border border-border bg-black/20 text-white/70 hover:text-white/90"
              }`}
              aria-pressed={idx === active}
            >
              {it.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
