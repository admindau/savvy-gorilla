"use client";

import { useMemo, useState } from "react";
import { ECOSYSTEM, ECOSYSTEM_FILTERS, type Company, type EcosystemFilterKey } from "../content/ecosystem";

function statusBadgeClass(status: Company["status"]) {
  if (status === "Live") return "border border-border bg-muted/60 text-gray-100";
  if (status === "In Progress") return "border border-accent/40 bg-muted/60 text-gray-100";
  return "border border-border bg-black/20 text-gray-300";
}

function priorityCardClass(priority: Company["priority"]) {
  // Product-first emphasis: core products get a subtle “signature” lift.
  if (priority === "core") {
    return "border-accent/30 bg-muted/55 hover:border-accent/45";
  }
  if (priority === "studio") {
    return "border-border bg-muted/40 hover:border-gray-300/50";
  }
  return "border-border bg-black/25 hover:border-gray-300/40";
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
    // core products on top; then studios; then pillars
    if (c.priority === "core") return 0;
    if (c.priority === "studio") return 1;
    return 2;
  };

  return [...items].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;

    // secondary sort: Live first, then In Progress, then Concept
    const statusRank = (s: Company["status"]) => (s === "Live" ? 0 : s === "In Progress" ? 1 : 2);
    const sa = statusRank(a.status);
    const sb = statusRank(b.status);
    if (sa !== sb) return sa - sb;

    return a.name.localeCompare(b.name);
  });
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
            className={`rounded-full px-4 py-2 text-[0.7rem] font-medium tracking-wide transition ${
              filter === f.key
                ? "border border-accent/50 bg-muted/70 text-white"
                : "border border-border bg-black/20 text-gray-300 hover:text-gray-100"
            }`}
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

          return (
            <div
              key={company.id}
              className={`group rounded-2xl border p-6 transition duration-200 hover:-translate-y-1 hover:bg-muted/70 animate-fade-up ${priorityCardClass(
                company.priority
              )}`}
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-gray-500">
                      {company.tag}
                    </p>
                    <span className="rounded-full border border-border bg-black/20 px-2 py-[2px] text-[0.65rem] text-gray-300">
                      {priorityLabel(company.priority)}
                    </span>
                  </div>

                  <h3 className="mt-2 truncate text-lg font-semibold text-white">{company.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{company.description}</p>
                </div>

                <div className={`shrink-0 rounded-full px-3 py-1 text-[0.7rem] ${statusBadgeClass(company.status)}`}>
                  {company.status}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : company.id)}
                  className="rounded-full border border-border px-4 py-2 text-[0.75rem] font-medium text-gray-200 transition hover:border-gray-300/60 hover:text-white"
                  aria-expanded={isOpen}
                >
                  {isOpen ? "Collapse" : "Details"}
                </button>

                {company.href && (
                  <a
                    href={company.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-[0.75rem] font-medium text-gray-300 transition hover:border-gray-300/60 hover:text-white"
                  >
                    Visit ↗
                  </a>
                )}
              </div>

              {/* Details */}
              {isOpen && (
                <div className="mt-4 rounded-2xl border border-border/80 bg-black/30 p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                    Why it exists
                  </p>

                  <p className="mt-2 text-sm text-gray-200">
                    {company.missionLine ?? "Built to strengthen the Savvy Gorilla ecosystem through focus and craft."}
                  </p>

                  <div className="mt-4 grid gap-2 text-xs text-gray-400 sm:grid-cols-3">
                    <div>
                      <span className="text-gray-300">Status:</span> {company.status}
                    </div>
                    <div>
                      <span className="text-gray-300">Updated:</span> {company.lastUpdated ?? "—"}
                    </div>
                    <div>
                      <span className="text-gray-300">Focus:</span> {company.tag}
                    </div>
                  </div>

                  {company.stageNote && (
                    <div className="mt-3 rounded-2xl border border-border bg-black/25 p-3">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                        Momentum
                      </p>
                      <p className="mt-2 text-sm text-gray-200">{company.stageNote}</p>
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
