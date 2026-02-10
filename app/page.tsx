import Container from "./components/container";
import CompanyGrid from "./components/company-grid";
import Reveal from "./components/reveal";
import NowBuilding from "./components/now-building";
import AtAGlance from "./components/at-a-glance";
import { ECOSYSTEM } from "./content/ecosystem";

export default function HomePage() {
  const coreProducts = ECOSYSTEM.filter((c) => c.priority === "core");

  return (
    <>
      {/* SENTINEL / FORGE ENTRY */}
      <section className="wk-chamber wk-field bg-black">
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
                  We build long-term engines at the intersection of finance, data, and infrastructure — designed for clarity,
                  resilience, and scale.
                </p>
              </Reveal>

              {/* African logic layer */}
              <Reveal delayMs={300}>
                <div className="mt-6 flex flex-wrap gap-2 text-[0.75rem] text-white/65">
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1">NODE: JUBA (04.8594°N)</span>
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1">SIGNAL: EAST AFRICA</span>
                  <span className="rounded-full border border-border bg-white/5 px-3 py-1">CONTINUUM: ON</span>
                </div>
              </Reveal>

              <Reveal delayMs={360}>
                <div className="mt-7 flex flex-wrap gap-3 text-xs">
                  <a
                    href="/ecosystem"
                    className="wk-scan rounded-full border border-white/40 bg-white/5 px-5 py-2.5 font-medium tracking-wide text-white transition hover:border-white/55"
                  >
                    <span className="mr-2 inline-block text-white/70">→</span>
                    Engage Interface
                  </a>

                  <a
                    href="/partnerships"
                    className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/70 transition hover:border-white/25 hover:text-white"
                  >
                    Open Uplink
                  </a>

                  <a
                    href="https://fx.savvyrilla.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/70 transition hover:border-white/25 hover:text-white"
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
                    Principle: <span className="text-white/75">Infrastructure is memory.</span>
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

              {/* Keys */}
              <Reveal delayMs={220}>
                <div className="wk-glass rounded-3xl p-6 md:p-7">
                  <p className="kicker">Keys</p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/75">
                    {[
                      { g: "⬡", label: "FORGE" },
                      { g: "◈", label: "LEDGER" },
                      { g: "△", label: "SIGNAL" },
                      { g: "◉", label: "CONTINUUM" },
                    ].map((x) => (
                      <div
                        key={x.label}
                        className="wk-scan group flex items-center justify-between rounded-2xl border border-border bg-white/5 px-4 py-3"
                      >
                        <span className="display text-base text-white/80">{x.g}</span>
                        <span className="kicker !text-[0.6rem] !tracking-[0.22em] text-white/55 group-hover:text-white/80">
                          {x.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[0.75rem] text-white/55">Slow interactions reveal deeper layers.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ACTIVE ENGINES */}
      <section className="wk-field bg-black py-16">
        <Container>
          <Reveal>
            <p className="kicker">Active engines</p>
          </Reveal>

          <Reveal delayMs={90}>
            <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">Programs in operation.</h2>
          </Reveal>

          <Reveal delayMs={140}>
            <p className="mt-3 max-w-2xl text-sm text-white/70 md:text-base">
              Each engine is built like infrastructure: stable, measurable, and ready to compound over time.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {coreProducts.slice(0, 4).map((p) => (
              <div key={p.id} className="wk-glass wk-scan rounded-3xl p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="display text-lg font-semibold">{p.name}</p>
                    <p className="mt-2 text-sm text-white/70">{p.description}</p>
                  </div>

                  <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-[0.7rem] text-white/80">
                    {p.status}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
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
                      Observe ↗
                    </a>
                  ) : (
                    <a
                      href="/ecosystem"
                      className="text-[0.8rem] font-medium text-white/80 underline underline-offset-4 transition hover:text-white"
                    >
                      Observe →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* THE HALL MOMENT (silence) */}
      <section className="wk-hall wk-field bg-black py-20">
        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal>
              <p className="kicker">The Hall</p>
            </Reveal>

            <Reveal delayMs={90}>
              <h2 className="display mt-4 text-4xl font-semibold leading-[1.06] md:text-6xl">
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
              <div className="mt-8 flex flex-wrap gap-2 text-[0.75rem] text-white/70">
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">HYPE: DISABLED</span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">STEWARDSHIP: REQUIRED</span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">FORGE: ACTIVE</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ECOSYSTEM */}
      <section className="wk-field bg-black py-16">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <p className="kicker">Ecosystem nodes</p>
                <h3 className="display mt-3 text-2xl font-semibold md:text-3xl">
                  Modules in the Forge.
                </h3>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="max-w-md text-sm text-white/65">
                Each node operates with its own identity. Savvy Gorilla provides strategy, standards, and long-term stewardship.
              </p>
            </Reveal>
          </div>

          <CompanyGrid />
        </Container>
      </section>

      {/* UPLINK */}
      <section className="wk-field bg-black py-16">
        <Container>
          <div className="wk-glass wk-scan rounded-3xl p-10">
            <Reveal>
              <p className="kicker">Uplink</p>
            </Reveal>

            <Reveal delayMs={90}>
              <h3 className="display mt-3 text-3xl font-semibold md:text-4xl">Open a partnership signal.</h3>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
                If you’re building something that matters — engage the interface. We move deliberately.
              </p>
            </Reveal>

            <Reveal delayMs={210}>
              <div className="mt-7 flex flex-wrap gap-3 text-xs">
                <a
                  href="/partnerships"
                  className="wk-scan rounded-full border border-white/40 bg-white/5 px-5 py-2.5 font-medium tracking-wide text-white transition hover:border-white/55"
                >
                  <span className="mr-2 inline-block text-white/70">→</span>
                  Send Signal
                </a>

                <a
                  href="/ecosystem"
                  className="rounded-full border border-border bg-white/0 px-5 py-2.5 text-white/70 transition hover:border-white/25 hover:text-white"
                >
                  Access Modules
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <p className="mt-8 text-xs text-white/50">Observer session complete.</p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
