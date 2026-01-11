"use client";

import { useMemo, useState } from "react";

type CompanyCategory = "Media" | "Production" | "Fintech" | "Heritage" | "Data" | "Podcast" | "Docu-series" | "Impact";

type Company = {
  name: string;
  description: string;
  tag: CompanyCategory;
  href?: string;
  status?: "Live" | "In Progress" | "Concept";
  missionLine?: string;
};

const companies: Company[] = [
  {
    name: "Savvy Rilla",
    tag: "Media",
    description: "Storytelling, podcasts, and cultural projects that amplify African voices.",
    href: "https://savvyrilla.tech",
    status: "Live",
    missionLine: "Culture-forward media that moves narratives."
  },
  {
    name: "Savvy Rilla Studios",
    tag: "Production",
    description: "Cinematic production for podcasts, documentaries, and branded content.",
    href: "https://studios.savvygorilla.tech",
    status: "In Progress",
    missionLine: "A studio pipeline built for consistency and quality."
  },
  {
    name: "Gorilla Ledger™",
    tag: "Fintech",
    description: "Modern financial tracking for individuals and small teams across Africa.",
    href: "https://gorillaledger.savvyrilla.tech",
    status: "In Progress",
    missionLine: "A financial system you can actually live with."
  },
  {
    name: "Roots Family Tree",
    tag: "Heritage",
    description: "A digital home for family lineage, memory, and intergenerational storytelling.",
    status: "Concept",
    missionLine: "Preserve lineage, memory, and identity—properly."
  },
  {
    name: "Savvy Rilla FX API",
    tag: "Data",
    description: "Developer-first FX and financial data services built for African markets.",
    href: "https://fx.savvyrilla.tech",
    status: "Live",
    missionLine: "Reliable data, clean endpoints, real utility."
  },
  {
    name: "Our Matriline Podcast",
    tag: "Podcast",
    description: "Girlhood, womanhood, and the journey in between—through African matrilineal stories.",
    status: "Live",
    missionLine: "Stories that feel like home and grow like truth."
  },
  {
    name: "War Towards Purpose",
    tag: "Docu-series",
    description: "Documenting the lives of freedom fighters, families, and leaders before history forgets them.",
    status: "In Progress",
    missionLine: "Archive legacy with dignity and narrative craft."
  },
  {
    name: "Savvy GoRilla Foundation",
    tag: "Impact",
    description: "Emerging initiatives in gender equality, health awareness, youth empowerment, and digital literacy.",
    href: "https://foundation.savvygorilla.tech",
    status: "In Progress",
    missionLine: "Impact programs anchored in systems, not slogans."
  }
];

const FILTERS: Array<{ key: "All" | CompanyCategory; label: string }> = [
  { key: "All", label: "All" },
  { key: "Fintech", label: "Products" },
  { key: "Data", label: "Data" },
  { key: "Media", label: "Media" },
  { key: "Podcast", label: "Podcasts" },
  { key: "Impact", label: "Impact" },
  { key: "Heritage", label: "Heritage" }
];

function statusBadge(status?: Company["status"]) {
  if (!status) return "border border-border bg-black/20 text-gray-300";
  if (status === "Live") return "border border-border bg-muted/60 text-gray-100";
  if (status === "In Progress") return "border border-accent/40 bg-muted/60 text-gray-100";
  return "border border-border bg-black/20 text-gray-300";
}

export default function CompanyGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return companies;
    return companies.filter((c) => c.tag === filter);
  }, [filter]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
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
        {filtered.map((company, index) => {
          const isOpen = open === company.name;

          return (
            <div
              key={company.name}
              className="group rounded-2xl border border-border bg-muted/40 p-6 transition duration-200 hover:-translate-y-1 hover:border-gray-300/50 hover:bg-muted/70 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-gray-500">
                    {company.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{company.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{company.description}</p>
                </div>

                <div className={`shrink-0 rounded-full px-3 py-1 text-[0.7rem] ${statusBadge(company.status)}`}>
                  {company.status ?? "Concept"}
                </div>
              </div>

              {/* Expand */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : company.name)}
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

              {isOpen && (
                <div className="mt-4 rounded-2xl border border-border/80 bg-black/30 p-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                    Why it exists
                  </p>
                  <p className="mt-2 text-sm text-gray-200">
                    {company.missionLine ?? "Built to strengthen the Savvy Gorilla ecosystem through focus and craft."}
                  </p>

                  <div className="mt-3 text-xs text-gray-400">
                    <span className="text-gray-300">Status:</span>{" "}
                    {company.status ?? "Concept"} •{" "}
                    <span className="text-gray-300">Focus:</span> {company.tag}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
