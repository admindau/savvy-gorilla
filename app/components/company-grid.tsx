"use client";

import { useMemo, useState } from "react";
import { ECOSYSTEM, ECOSYSTEM_FILTERS, type Company, type EcosystemFilterKey } from "../content/ecosystem";

function statusTone(status: Company["status"]) {
  if (status === "Live") return "text-white/80";
  if (status === "In Progress") return "text-white/75";
  return "text-white/60";
}

function statusPill(status: Company["status"]) {
  // Keep pills neutral; energy appears only on interaction.
  return [
    "rounded-full border border-border bg-white/5 px-3 py-1 text-[0.7rem]",
    statusTone(status),
  ].join(" ");
}

function priorityLabel(priority: Company["priority"]) {
  if (priority === "core") return "Core";
  if (priority === "studio") return "Studio";
  return "Pillar";
}

function filterCompanies(filter: EcosystemFilterKey, items: Company[]) {
  const cfg = ECOSYSTEM_FILTERS.find((f) => f.key === filter);
  if (!cfg || filter === "All") return items;
  const tags = cfg.tags ?? [];
  return items.filter((c) => tags.includes(c.tag));
}

function sortProductFirst(items: Company[]) {
  const rank = (c: Company) => {
    if (c.priority === "core") return 0;
    if (c.priority === "studio") return 1;
    return 2;
  };

  return [...items].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;

    const statusRank = (s: Company["status"]) => (s === "Live" ? 0 : s === "In Progress" ? 1 : 2);
    const sa = statusRank(a.status);
    const sb = statusRank(b.status);
    if (sa !== sb) return sa - sb;

    return a.name.localeCompare(b.name);
  });
}

function moduleIdFrom(company: Company) {
  const raw = company.id.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return `SGT-${raw.slice(0, 8) || "NODE"}`;
}

export default function CompanyGrid() {
  const [filter, setFilter] = useState<EcosystemFilterKey>("All");
  const [open, setOpen] = useState<string | null>(null);

  const visible = useMemo(() => {
    const filtered = filterCompanies(filter, ECOSYSTEM);
    return sortProductFirst(filtered);
  }, [filter]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {ECOSYSTEM_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => {
              setFilter(f.key);
              setOpen(null);
            }}
            className={[
              "rounded-full px-4 py-2 text-[0.7rem] font-medium tracking-wide transition",
              filter === f.key
                ? "wk-scan border border-border bg-white/6 text-white"
                : "border border-border bg-black/20 text-white/65 hover:text-white/85",
            ].join(" ")}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((company, index) => {
          const isOpen = open === company.id;
          const moduleId = moduleIdFrom(company);

          return (
            <div
              key={company.id}
              className={[
                "wk-glass wk-scan group rounded-3xl p-6 transition",
                "hover:shadow-[0_0_0_1px_rgba(106,255,0,0.08),0_22px_70px_rgba(0,0,0,0.65)]",
              ].join(" ")}
              style={{ animationDelay: `${index * 35}ms` }}
            >
              {/* Module header */}
              <div className="flex items-start justify-between gap-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-white/45">
                      {company.tag}
                    </p>
                    <span className="rounded-full border border-border bg-black/20 px-2 py-[2px] text-[0.65rem] text-white/55">
                      {priorityLabel(company.priority)}
                    </span>
                    <span className="text-[0.65rem] text-white/35">•</span>
                    <span className="text-[0.65rem] text-white/55">{moduleId}</span>
                  </div>

                  <h3 className="mt-2 truncate text-lg font-semibold text-white">
                    {company.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/70">
                    {company.description}
                  </p>

                  {/* African logic meta */}
                  <div className="mt-4 flex flex-wrap gap-2 text-[0.72rem] text-white/55">
                    <span className="rounded-full border border-border bg-black/15 px-3 py-1">
                      REGION: AFRICA
                    </span>
                    <span className="rounded-full border border-border bg-black/15 px-3 py-1">
                      NODE: {company.tag}
                    </span>
                    <span className="rounded-full border border-border bg-black/15 px-3 py-1">
                      UPDATED: {company.lastUpdated ?? "—"}
                    </span>
                  </div>
                </div>

                <div className={statusPill(company.status)}>{company.status}</div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : company.id)}
                  className="wk-scan rounded-full border border-border bg-black/10 px-4 py-2 text-[0.75rem] font-medium text-white/75 transition hover:text-white"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Seal" : "Observe"}
                </button>

                {company.href ? (
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-black/0 px-4 py-2 text-[0.75rem] font-medium text-white/65 transition hover:border-white/20 hover:text-white"
                  >
                    Engage ↗
                  </a>
                ) : (
                  <a
                    href="/ecosystem"
                    className="rounded-full border border-border bg-black/0 px-4 py-2 text-[0.75rem] font-medium text-white/65 transition hover:border-white/20 hover:text-white"
                  >
                    Engage →
                  </a>
                )}
              </div>

              {/* Details */}
              {isOpen && (
                <div className="mt-5 rounded-3xl border border-border bg-black/25 p-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/45">
                    Intent
                  </p>

                  <p className="mt-2 text-sm text-white/80">
                    {company.missionLine ?? "Built to strengthen the Savvy Gorilla ecosystem through focus and craft."}
                  </p>

                  <div className="mt-4 grid gap-2 text-xs text-white/55 sm:grid-cols-3">
                    <div>
                      <span className="text-white/70">Status:</span> {company.status}
                    </div>
                    <div>
                      <span className="text-white/70">Module:</span> {moduleId}
                    </div>
                    <div>
                      <span className="text-white/70">Class:</span> {priorityLabel(company.priority)}
                    </div>
                  </div>

                  {company.stageNote && (
                    <div className="mt-4 rounded-3xl border border-border bg-black/18 p-4">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/45">
                        Momentum
                      </p>
                      <p className="mt-2 text-sm text-white/75">{company.stageNote}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
