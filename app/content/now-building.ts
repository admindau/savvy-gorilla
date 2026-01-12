export type NowBuildingStatus = "Live" | "In Progress" | "Concept";

export type NowBuildingItem = {
  id: string;
  title: string;
  status: NowBuildingStatus;
  note?: string;
  href?: string;
  updated?: string; // e.g., "Jan 2026"
};

export const NOW_BUILDING: NowBuildingItem[] = [
  {
    id: "gorilla-ledger",
    title: "Gorilla Ledger™",
    status: "In Progress",
    note: "Fintech tracking app shipping iteratively.",
    href: "https://gl.savvyrilla.tech",
    updated: "Jan 2026"
  },
  {
    id: "savvy-rilla-fx-api",
    title: "Savvy Rilla FX API",
    status: "Live",
    note: "Live FX & financial data service.",
    href: "https://fx.savvyrilla.tech",
    updated: "Jan 2026"
  }
];
