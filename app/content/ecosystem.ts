export type CompanyStatus = "Live" | "In Progress" | "Concept";

export type CompanyTag =
  | "Fintech"
  | "Data"
  | "Media"
  | "Production"
  | "Podcast"
  | "Docu-series"
  | "Impact"
  | "Heritage";

export type CompanyPriority = "core" | "studio" | "pillar";

export type Company = {
  id: string;
  name: string;
  tag: CompanyTag;
  priority: CompanyPriority;

  description: string;
  missionLine?: string;

  status: CompanyStatus;
  href?: string;

  /** Momentum fields (keeps the ecosystem feeling alive) */
  lastUpdated?: string; // e.g., "Jan 2026"
  stageNote?: string; // e.g., "v1 shipping — budgets + recurring next"
};

export type EcosystemFilterKey = "All" | "Products" | "Studios" | "Impact" | "Heritage";

export const ECOSYSTEM_FILTERS: Array<{
  key: EcosystemFilterKey;
  label: string;
  tags?: CompanyTag[];
}> = [
  { key: "All", label: "All" },

  // Product-first: Products is the primary lens (Fintech + Data)
  { key: "Products", label: "Products", tags: ["Fintech", "Data"] },

  // Studios: everything narrative/production
  { key: "Studios", label: "Studios", tags: ["Media", "Production", "Podcast", "Docu-series"] },

  // Pillars
  { key: "Impact", label: "Impact", tags: ["Impact"] },
  { key: "Heritage", label: "Heritage", tags: ["Heritage"] }
];

export const ECOSYSTEM: Company[] = [
  // --- CORE PRODUCTS (product-first emphasis) ---
  {
    id: "gorilla-ledger",
    name: "Gorilla Ledger™",
    tag: "Fintech",
    priority: "core",
    description: "Modern financial tracking for individuals and small teams across Africa.",
    missionLine: "A financial system you can actually live with.",
    status: "In Progress",
    href: "https://gl.savvyrilla.tech",
    lastUpdated: "Jan 2026",
    stageNote: "Core wallets + transactions stable; budgets + recurring next."
  },
  {
    id: "savvy-rilla-fx-api",
    name: "Savvy Rilla FX API",
    tag: "Data",
    priority: "core",
    description: "Developer-first FX and financial data services built for African markets.",
    missionLine: "Reliable data, clean endpoints, real utility.",
    status: "Live",
    href: "https://fx.savvyrilla.tech",
    lastUpdated: "Jan 2026",
    stageNote: "Live service; expanding insights and visibility layer."
  },

  // --- STUDIOS (support product narrative + distribution) ---
  {
    id: "savvy-rilla",
    name: "Savvy Rilla",
    tag: "Media",
    priority: "studio",
    description: "Storytelling, podcasts, and cultural projects that amplify African voices.",
    missionLine: "Culture-forward media that moves narratives.",
    status: "Live",
    href: "https://savvyrilla.tech",
    lastUpdated: "Dec 2025",
    stageNote: "Content engine and umbrella for shows and studio work."
  },
  {
    id: "savvy-rilla-studios",
    name: "Savvy Rilla Studios",
    tag: "Production",
    priority: "studio",
    description: "Cinematic production for podcasts, documentaries, and branded content.",
    missionLine: "A studio pipeline built for consistency and quality.",
    status: "In Progress",
    href: "https://studios.savvygorilla.tech",
    lastUpdated: "Dec 2025",
    stageNote: "Packaging, templates, and recurring content workflow."
  },
  {
    id: "our-matriline",
    name: "Our Matriline Podcast",
    tag: "Podcast",
    priority: "studio",
    description: "Girlhood, womanhood, and the journey in between—through African matrilineal stories.",
    missionLine: "Stories that feel like home and grow like truth.",
    status: "Live",
    lastUpdated: "Dec 2025",
    stageNote: "Season cadence + distribution optimization."
  },
  {
    id: "war-towards-purpose",
    name: "War Towards Purpose",
    tag: "Docu-series",
    priority: "studio",
    description: "Documenting freedom fighters, families, and leaders before history forgets them.",
    missionLine: "Archive legacy with dignity and narrative craft.",
    status: "In Progress",
    lastUpdated: "Dec 2025",
    stageNote: "Research + episode pipeline in development."
  },

  // --- PILLARS (impact + heritage are long-term legitimacy) ---
  {
    id: "foundation",
    name: "Savvy GoRilla Foundation",
    tag: "Impact",
    priority: "pillar",
    description: "Emerging initiatives in gender equality, health awareness, youth empowerment, and digital literacy.",
    missionLine: "Impact programs anchored in systems, not slogans.",
    status: "In Progress",
    href: "https://foundation.savvygorilla.tech",
    lastUpdated: "Dec 2025",
    stageNote: "Programs defined; partnerships and rollouts staged."
  },
  {
    id: "roots-family-tree",
    name: "Roots Family Tree",
    tag: "Heritage",
    priority: "pillar",
    description: "A digital home for family lineage, memory, and intergenerational storytelling.",
    missionLine: "Preserve lineage, memory, and identity—properly.",
    status: "Concept",
    lastUpdated: "Nov 2025",
    stageNote: "Concept shaping + architecture exploration."
  }
];
