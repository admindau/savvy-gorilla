import { ECOSYSTEM, type Company } from "../content/ecosystem";

function pickLastUpdated(items: Company[]) {
  // We keep it simple: show the most recent non-empty string by ordering preference.
  // You can later change to real dates if you standardize date formats.
  const nonEmpty = items.map((c) => c.lastUpdated).filter(Boolean) as string[];
  return nonEmpty[0] ?? "—";
}

export default function AtAGlance() {
  const core = ECOSYSTEM.filter((c) => c.priority === "core");
  const studios = ECOSYSTEM.filter((c) => c.priority === "studio");
  const pillars = ECOSYSTEM.filter((c) => c.priority === "pillar");

  const liveCount = ECOSYSTEM.filter((c) => c.status === "Live").length;
  const inProgressCount = ECOSYSTEM.filter((c) => c.status === "In Progress").length;
  const conceptCount = ECOSYSTEM.filter((c) => c.status === "Concept").length;

  const lastUpdated = pickLastUpdated(ECOSYSTEM);

  return (
    <div className="max-w-md rounded-3xl border border-border bg-muted/40 p-6 text-xs text-gray-300">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
        At a glance
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-border bg-black/20 p-3">
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-500">Core</p>
          <p className="mt-1 text-lg font-semibold text-white">{core.length}</p>
          <p className="text-[0.7rem] text-gray-400">Products</p>
        </div>

        <div className="rounded-2xl border border-border bg-black/20 p-3">
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-500">Studios</p>
          <p className="mt-1 text-lg font-semibold text-white">{studios.length}</p>
          <p className="text-[0.7rem] text-gray-400">Media</p>
        </div>

        <div className="rounded-2xl border border-border bg-black/20 p-3">
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-500">Pillars</p>
          <p className="mt-1 text-lg font-semibold text-white">{pillars.length}</p>
          <p className="text-[0.7rem] text-gray-400">Impact</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-black/20 p-4">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
          Momentum
        </p>
        <div className="mt-2 grid gap-2 text-[0.75rem] text-gray-300">
          <p>
            <span className="text-gray-400">Live:</span> <span className="text-white">{liveCount}</span> •{" "}
            <span className="text-gray-400">In progress:</span> <span className="text-white">{inProgressCount}</span> •{" "}
            <span className="text-gray-400">Concept:</span> <span className="text-white">{conceptCount}</span>
          </p>
          <p>
            <span className="text-gray-400">Last updated:</span>{" "}
            <span className="text-gray-200">{lastUpdated}</span>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
          Core bets
        </p>
        <ul className="mt-2 space-y-2 text-[0.75rem]">
          {core.slice(0, 3).map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-3">
              <span className="text-gray-200">{c.name}</span>
              <span className="rounded-full border border-accent/30 bg-black/20 px-2 py-[2px] text-[0.65rem] text-gray-300">
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
