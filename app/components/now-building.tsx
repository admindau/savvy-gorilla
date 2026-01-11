"use client";

import { useEffect, useMemo, useState } from "react";
import { NOW_BUILDING, type NowBuildingItem } from "../content/now-building";

function statusPillClass(status: NowBuildingItem["status"]) {
  if (status === "Live") return "border border-border bg-muted/60 text-gray-100";
  if (status === "In Progress") return "border border-accent/40 bg-muted/60 text-gray-100";
  return "border border-border bg-black/20 text-gray-300";
}

export default function NowBuilding({ autoRotate = true }: { autoRotate?: boolean }) {
  const items = useMemo(() => NOW_BUILDING, []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;
    if (items.length <= 1) return;

    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % items.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, [autoRotate, items.length]);

  const current = items[active];

  return (
    <div className="mt-6 rounded-3xl border border-border bg-muted/30 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Now building
          </p>
        </div>

        <span className={`rounded-full px-3 py-1 text-[0.7rem] ${statusPillClass(current.status)}`}>
          {current.status}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold text-white">{current.title}</p>
      {current.note && <p className="mt-1 text-xs text-gray-300">{current.note}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {current.href && (
          <a
            href={current.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit text-[0.75rem] font-medium text-gray-200 underline underline-offset-4 hover:text-white"
          >
            View ↗
          </a>
        )}

        {current.updated && (
          <span className="text-[0.7rem] text-gray-400">
            Updated: <span className="text-gray-300">{current.updated}</span>
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
                  ? "border border-accent/50 bg-muted/70 text-white"
                  : "border border-border bg-black/20 text-gray-300 hover:text-gray-100"
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
