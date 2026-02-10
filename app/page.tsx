import Container from "./components/container";
import Reveal from "./components/reveal";
import NowBuilding from "./components/now-building";
import AtAGlance from "./components/at-a-glance";
import CompanyGrid from "./components/company-grid";
import KeysPanel from "./components/keys-panel";
import { ECOSYSTEM } from "./content/ecosystem";

export default function HomePage() {
  const coreProducts = ECOSYSTEM.filter((c) => c.priority === "core");

  return (
    <>
      {/* COMMAND CENTER ENTRY */}
      <section className="wk-chamber border-b border-border bg-black">
        <div className="wk-grid" aria-hidden="true" />
        <div className="wk-grain" aria-hidden="true" />

        <Container className="relative py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            {/* Left: Doctrine */}
            <div className="max-w-2xl">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="wk-pill wk-scan">
                    <span className="wk-dot" />
                    SYSTEM ONLINE • FORGE MODE
                  </span>
                  <span className="wk-pill">OBSERVER CLEARANCE: GRANTED</span>
                </div>
              </Reveal>

              <Reveal delayMs={110}>
                <p className="kicker mt-5">Savvy Gorilla Technologies™</p>
              </Reveal>

              <Reveal delayMs={180}>
                <h1 className="display mt-4 text-4xl font-semibold leading-[1.06] md:text-6xl">
                  THE FORGE FOR
                  <br />
                  AFRICAN SYSTEMS.
                </h1>
              </Reveal>

              <Reveal delayMs={240}>
                <p className="mt-5 max-w-xl text-sm text-white/70 md:text-base">
                  We build long-term engines at the intersection of finance, data,
                  and infrastructure — designed for clarity, resilience, and scale.
                </p>
              </Reveal>

              {/* African logic layer */}
              <Reveal delayMs={300}>
                <div className="mt-6 flex flex-wrap gap-2 text-[0.75rem] text-white/65">
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                    NODE: JUBA (04.8594°N)
                  </span>
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                    SIGNAL: EAST AFRICA
                  </span>
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                    CONTINUUM: ON
                  </span>
                </div>
              </Reveal>

              <Reveal delayMs={360}>
                <div className="mt-7 flex flex-wrap gap-3 text-xs">
                  <a
                    href="/ecosystem"
                    className="wk-scan rounded-full border border-white/70 bg-white/5 px-5 py-2.5 font-medium tracking-wide text-white transition hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(106,255,0,0.22),0_0_26px_rgba(106,255,0,0.16)]"
                  >
                    <span className="mr-2 inline-block text-white/70">→</span>
                    Engage Interface
                  </a>

                  <a
                    href="/partnerships"
                    className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/70 transition hover:border-white/60 hover:text-white"
                  >
                    Open Uplink
                  </a>

                  <a
                    href="https://fx.savvyrilla.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/70 transition hover:border-white/60 hover:text-white"
                  >
                    FX Interface ↗
                  </a>
                </div>
              </Reveal>

              <Reveal delayMs={420}>
                <div className="mt-8">
                  <NowBuilding autoRotate />
                </div>
              </Reveal>
            </div>

            {/* Right: Control Panel */}
            <div className="space-y-4">
              <Reveal>
                <div className="wk-glass wk-scan rounded-3xl p-6 md:p-7">
                  <p className="kicker">Telemetry</p>

                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <div className="flex items-center justify-between gap-4">
                      <span>Core engines</span>
                      <span className="text-white/60">{coreProducts.length}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Build discipline</span>
                      <span className="text-white/60">Deliberate</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Energy state</span>
                      <span className="text-white/60">Standby</span>
                    </div>
                  </div>

                  <div className="mt-5 h-px w-full bg-white/10" />

                  <p className="mt-5 text-xs text-white/55">
                    Principle:{" "}
                    <span className="text-white/75">Infrastructure is memory.</span>
                  </p>
                </div>
              </Reveal>

              <Reveal delayMs={120}>
                <div className="wk-glass wk-scan rounded-3xl p-6 md:p-7">
                  <p className="kicker">At a glance</p>
                  <div className="mt-4">
                    <AtAGlance />
                  </div>
                </div>
              </Reveal>

              <Reveal delayMs={220}>
                <div className="wk-glass rounded-3xl p-6 md:p-7">
                  <p className="kicker">Keys</p>
                  <div className="mt-4">
                    <KeysPanel />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* THE HALL (silence moment) */}
      <section className="wk-hall border-b border-border bg-black">
        <Container className="py-16 md:py-20">
          <div className="max-w-4xl">
            <Reveal>
              <p className="kicker">The Hall</p>
            </Reveal>

            <Reveal delayMs={120}>
              <h2 className="display mt-4 text-4xl font-semibold leading-[1.06] md:text-6xl">
                WE BUILD SYSTEMS
                <br />
                THAT OUTLIVE HYPE.
              </h2>
            </Reveal>

            <Reveal delayMs={220}>
              <p className="mt-6 max-w-2xl text-sm text-white/70 md:text-base">
                Quiet execution. Strong standards. African context. Global quality.
                When the interface goes silent, the engine still runs.
              </p>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="mt-8 flex flex-wrap gap-3 text-xs">
                <a
                  href="/about"
                  className="wk-scan rounded-full border border-border bg-white/5 px-5 py-2.5 text-white/75 transition hover:border-white/60 hover:text-white"
                >
                  Read the doctrine →
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/70 transition hover:border-white/60 hover:text-white"
                >
                  Request access
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ECOSYSTEM MODULE */}
      <section className="bg-black">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="kicker">Ecosystem</p>
              </Reveal>
              <Reveal delayMs={90}>
                <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
                  Modules in the Forge.
                </h2>
              </Reveal>
            </div>

            <Reveal delayMs={140}>
              <p className="max-w-md text-xs text-white/55">
                Each subsidiary holds its own identity. Savvy Gorilla sets standards,
                builds the foundations, and protects continuity.
              </p>
            </Reveal>
          </div>

          <div className="mt-10">
            <CompanyGrid />
          </div>
        </Container>
      </section>
    </>
  );
}
