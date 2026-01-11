"use client";

import { useEffect, useMemo, useState } from "react";

type NowBuildingItem = {
  title: string;
  status: "Live" | "In Progress" | "Concept";
  note?: string;
  href?: string;
};

const DEFAULT_ITEMS: NowBuildingItem[] = [
  {
    title: "Gorilla Ledger™",
    status: "In Progress",
    note: "Fintech tracking app shipping iteratively",
    href: "https://gorillaledger.savvyrilla.tech"
  },
  {
    title: "Savvy Rilla FX API",
    status: "Live",
    note: "Live FX + financial data service",
    href: "https://fx.savvyrilla.tech"
  },
  {
    title: "Savvy Rilla Studios",
    status: "In Progress",
    note: "Production + creative direction",
    href: "https://studios.savvygorilla.tech"
  }
];

function statusPill(status: NowBuildingItem["status"]) {
  switch (status) {
    case "Live":
      return "border border-border bg-muted/60 text-gray-100";
    case "In Progress":
      return "border border-accent/40 bg-muted/60 text-gray-100";
    case "Concept":
      return "border border-border bg-black/40 text-gray-300";
  }
}

export default function NowBuilding() {
  const items = useMemo(() => DEFAULT_ITEMS, []);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % items.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [items.length]);

  const current = items[active];

  return (
    <div className="mt-6 rounded-3xl border border-border bg-muted/30 p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Now building
          </p>
        </div>

        <div className={`inline-flex w-fit rounded-full px-3 py-1 text-[0.7rem] ${statusPill(current.status)}`}>
          {current.status}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <p className="text-sm font-semibold text-white">{current.title}</p>
        {current.note && <p className="text-xs text-gray-300">{current.note}</p>}
        {current.href && (
          <a
            href={current.href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-fit text-[0.75rem] font-medium text-gray-200 underline underline-offset-4 hover:text-white"
          >
            View ↗
          </a>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it, idx) => (
          <button
            key={it.title}
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
    </div>
  );
}
