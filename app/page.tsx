import Container from "./components/container";
import CompanyGrid from "./components/company-grid";
import Reveal from "./components/reveal";
import NowBuilding from "./components/now-building";
import { ECOSYSTEM } from "./content/ecosystem";

export default function HomePage() {
  const coreProducts = ECOSYSTEM.filter((c) => c.priority === "core");

  return (
    <div className="snap-y-mandatory">
      {/* SCENE 1 — HERO (full-bleed image) */}
      <section className="relative min-h-screen snap-start overflow-hidden bg-black">
        {/* IMPORTANT: Add this file: /public/images/hero.jpg */}
        <div
          className="hero-backdrop"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="film-grain" aria-hidden="true" />

        <Container className="relative flex min-h-screen flex-col justify-end pb-14 pt-20 md:pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <p className="kicker">Savvy Gorilla Technologies™</p>
            </Reveal>

            <Reveal delayMs={80}>
              <h1 className="display mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl">
                BUILDING INTELLIGENT SYSTEMS
                <br />
                FOR A SMARTER AFRICA.
              </h1>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-4 max-w-2xl text-sm text-white/75 md:text-base">
                Finance • AI • Data • Digital Infrastructure
              </p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="mt-7 flex flex-wrap gap-3 text-xs">
                <a
                  href="/ecosystem"
                  className="group rounded-full border border-white/70 bg-white/5 px-5 py-2.5 font-medium tracking-wide text-white transition hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(106,255,0,0.25),0_0_26px_rgba(106,255,0,0.18)]"
                >
                  <span className="mr-2 inline-block text-accent/80 transition group-hover:text-accent">
                    →
                  </span>
                  Explore the System
                </a>

                <a
                  href="/partnerships"
                  className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/75 transition hover:border-white/60 hover:text-white"
                >
                  Partnership Signal
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="mt-7 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Status: ONLINE
                </span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Build mode: ACTIVE
                </span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Signal: Africa-first
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SCENE 2 — NOW BUILDING (short + cinematic) */}
      <section className="relative min-h-screen snap-start bg-black">
        <Container className="flex min-h-screen flex-col justify-center py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="max-w-xl">
              <Reveal>
                <p className="kicker">Operational Focus</p>
              </Reveal>

              <Reveal delayMs={90}>
                <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
                  Systems. Not noise.
                </h2>
              </Reveal>

              <Reveal delayMs={150}>
                <p className="mt-4 text-sm text-white/70 md:text-base">
                  We build with patience and precision — products that endure, scale, and serve real needs.
                </p>
              </Reveal>

              <Reveal delayMs={210}>
                <div className="mt-6">
                  <NowBuilding autoRotate />
                </div>
              </Reveal>
            </div>

            <div className="rounded-3xl border border-border bg-white/5 p-7 backdrop-blur scan-border">
              <Reveal>
                <p className="kicker">Telemetry</p>
              </Reveal>

              <Reveal delayMs={90}>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  <div className="flex items-center justify-between gap-4">
                    <span>Core engines</span>
                    <span className="text-white/60">{coreProducts.length}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Interface</span>
                    <span className="text-white/60">Command-center</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Continuity</span>
                    <span className="text-white/60">Long-term</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={150}>
                <div className="mt-6 h-px w-full bg-white/10" />
              </Reveal>

              <Reveal delayMs={210}>
                <p className="mt-6 text-xs text-white/60">
                  “Infrastructure is memory.” <span className="text-white/40">— System principle</span>
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* SCENE 3 — CORE PRODUCTS AS “MISSIONS” */}
      <section className="relative min-h-screen snap-start bg-black">
        <Container className="flex min-h-screen flex-col justify-center py-16">
          <Reveal>
            <p className="kicker">Active Engines</p>
          </Reveal>

          <Reveal delayMs={90}>
            <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
              Programs in operation.
            </h2>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              Each engine is a focused system — designed for clarity, resilience, and scale.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {coreProducts.slice(0, 2).map((p) => (
              <div
                key={p.id}
                className="mission-tile scan-border relative overflow-hidden rounded-3xl border border-border bg-white/5 backdrop-blur"
              >
                {/* Optional mission imagery: add per-product later. Placeholder uses hero. */}
                <div
                  className="mission-bg"
                  style={{ backgroundImage: "url(/images/hero.jpg)" }}
                  aria-hidden="true"
                />
                <div className="mission-shade" aria-hidden="true" />

                <div className="relative p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="display text-lg font-semibold">{p.name}</p>
                      <p className="mt-2 text-sm text-white/70">{p.description}</p>
                    </div>

                    <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-[0.7rem] text-white/80">
                      {p.status}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-[0.75rem] text-white/55">
                      Principle: <span className="text-white/75">Clarity is sovereignty.</span>
                    </p>

                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[0.8rem] font-medium text-white/80 underline underline-offset-4 transition hover:text-white"
                      >
                        View ↗
                      </a>
                    ) : (
                      <a
                        href="/ecosystem"
                        className="text-[0.8rem] font-medium text-white/80 underline underline-offset-4 transition hover:text-white"
                      >
                        View ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Reveal delayMs={180}>
            <div className="mt-10">
              <a
                href="/ecosystem"
                className="inline-flex rounded-full border border-border bg-white/0 px-5 py-2.5 text-xs text-white/75 transition hover:border-white/60 hover:text-white"
              >
                View full ecosystem →
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SCENE 4 — THE “HALL MOMENT” */}
      <section className="relative min-h-screen snap-start bg-black">
        <Container className="flex min-h-screen flex-col justify-center py-16">
          <div className="max-w-4xl">
            <Reveal>
              <p className="kicker">Principle</p>
            </Reveal>

            <Reveal delayMs={90}>
              <h2 className="display mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl">
                WE BUILD SYSTEMS
                <br />
                THAT OUTLIVE US.
              </h2>
            </Reveal>

            <Reveal delayMs={160}>
              <p className="mt-6 max-w-2xl text-sm text-white/65 md:text-base">
                Long-term thinking is not branding — it is a technical requirement.
              </p>
            </Reveal>

            <Reveal delayMs={220}>
              <div className="mt-8 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Continuum: ON
                </span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Stewardship: REQUIRED
                </span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Hype: DISABLED
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SCENE 5 — ECOSYSTEM GRID (keep your component, SpaceX framing) */}
      <section className="relative min-h-screen snap-start bg-black">
        <Container className="flex min-h-screen flex-col justify-center py-16">
          <Reveal>
            <p className="kicker">Ecosystem</p>
          </Reveal>

          <Reveal delayMs={90}>
            <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
              A network of platforms and programs.
            </h2>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              Each node operates independently, while Savvy Gorilla provides strategy, standards, and long-term stewardship.
            </p>
          </Reveal>

          <div className="mt-10">
            <CompanyGrid />
          </div>
        </Container>
      </section>

      {/* SCENE 6 — FINAL CTA */}
      <section className="relative min-h-screen snap-start bg-black">
        <Container className="flex min-h-screen flex-col justify-center py-16">
          <div className="max-w-3xl rounded-3xl border border-border bg-white/5 p-10 backdrop-blur scan-border">
            <Reveal>
              <p className="kicker">Uplink</p>
            </Reveal>

            <Reveal delayMs={90}>
              <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
                Open a partnership signal.
              </h2>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-4 text-sm text-white/70 md:text-base">
                If you’re building something that matters — we can talk.
              </p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="mt-7 flex flex-wrap gap-3 text-xs">
                <a
                  href="/partnerships"
                  className="group rounded-full border border-white/70 bg-white/5 px-5 py-2.5 font-medium tracking-wide text-white transition hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(106,255,0,0.25),0_0_26px_rgba(106,255,0,0.18)]"
                >
                  <span className="mr-2 inline-block text-accent/80 transition group-hover:text-accent">
                    →
                  </span>
                  Send a Signal
                </a>

                <a
                  href="/ecosystem"
                  className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/75 transition hover:border-white/60 hover:text-white"
                >
                  Explore Modules
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <p className="mt-8 text-xs text-white/50">
                Observer layer complete.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
