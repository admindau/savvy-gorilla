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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border bg-black">
        {/* Ambient layers (CSS-only) */}
        <div className="pointer-events-none absolute inset-0">
          {/* soft green glow */}
          <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0) 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0) 75%)",
            }}
          />

          {/* subtle “noise” substitute */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.08), transparent 35%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.05), transparent 45%)",
            }}
          />
        </div>

        <Container className="relative flex flex-col gap-10 py-16 md:flex-row md:items-center md:justify-between">
          {/* Watermark logo */}
          <div className="pointer-events-none absolute right-0 top-8 hidden w-[520px] opacity-[0.06] md:block">
            <img
              src="/logos/savvy-gorilla-white.png"
              alt=""
              className="h-auto w-full"
            />
          </div>

          {/* LEFT SIDE – TEXT */}
          <div className="max-w-xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Savvy Gorilla Technologies™
                </p>

                {/* System status pill */}
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-[0.65rem] font-medium text-gray-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                  SYSTEM ONLINE
                </span>
              </div>
            </Reveal>

            {/* Accent divider (muted by default) */}
            <Reveal delayMs={90}>
              <div className="mt-3 h-px w-16 bg-accent/35" />
            </Reveal>

            <Reveal delayMs={140}>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Building intelligent systems for a smarter Africa.
              </h1>
            </Reveal>

            <Reveal delayMs={190}>
              <p className="mt-4 text-sm text-gray-300 md:text-base">
                Savvy Gorilla is a modern African holding company building and
                backing products at the intersection of{" "}
                <span className="font-medium text-white">
                  finance, culture, and technology.
                </span>{" "}
                We design long-term systems — from fintech platforms to
                intelligence tools — built to scale with the continent.
              </p>
            </Reveal>

            {/* Telemetry strip */}
            <Reveal delayMs={220}>
              <div className="mt-5 flex flex-wrap gap-2 text-[0.7rem] text-gray-300">
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Build mode: ACTIVE
                </span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Stack: Next.js + Supabase
                </span>
                <span className="rounded-full border border-border bg-white/5 px-3 py-1">
                  Signal: Africa-first
                </span>
              </div>
            </Reveal>

            {/* Now Building (data-driven) */}
            <Reveal delayMs={260}>
              <NowBuilding autoRotate />
            </Reveal>

            {/* CTAs */}
            <Reveal delayMs={300}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <a
                  href="/ecosystem"
                  className="group relative rounded-full border border-white/70 bg-white/5 px-4 py-2 font-medium tracking-wide text-white transition hover:border-accent/60 hover:text-white hover:shadow-[0_0_0_1px_rgba(106,255,0,0.25),0_0_24px_rgba(106,255,0,0.18)]"
                >
                  <span className="mr-2 inline-block text-accent/80 transition group-hover:text-accent">
                    →
                  </span>
                  Enter the Gorilla Lab
                </a>

                <a
                  href="/partnerships"
                  className="rounded-full border border-border bg-white/0 px-4 py-2 text-gray-300 transition hover:border-white/60 hover:text-white"
                >
                  Partnership Opportunities
                </a>

                <a
                  href="https://fx.savvyrilla.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white/0 px-4 py-2 text-gray-300 transition hover:border-white/60 hover:text-white"
                >
                  Visit Savvy Rilla FX API ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE – LOGO + AT-A-GLANCE */}
          <div className="relative z-10 flex flex-col items-center gap-6 md:items-end md:mt-4">
            <Reveal>
              <div className="flex w-full justify-center md:justify-end">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-white/5 backdrop-blur transition hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(106,255,0,0.18),0_0_22px_rgba(106,255,0,0.12)]">
                  <img
                    src="/logos/savvy-gorilla-white.png"
                    alt="Savvy Gorilla Logo"
                    className="h-12 w-12"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <AtAGlance />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CORE PRODUCTS STRIP */}
      <section className="bg-black py-10">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border bg-white/5 p-6 backdrop-blur md:p-8">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                Core products
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {coreProducts.slice(0, 2).map((p) => (
                  <div
                    key={p.id}
                    className="group rounded-2xl border border-border bg-black/30 p-5 transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_0_0_1px_rgba(106,255,0,0.12),0_0_26px_rgba(106,255,0,0.10)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{p.name}</p>

                      <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-[0.7rem] text-gray-200 transition group-hover:border-accent/30">
                        {p.status}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-300">{p.description}</p>

                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex w-fit text-[0.75rem] font-medium text-gray-200 underline underline-offset-4 transition hover:text-white"
                      >
                        View ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* MANIFESTO */}
      <section className="bg-black py-14">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border bg-white/5 p-8 backdrop-blur md:p-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                Our stance
              </p>
              <div className="mt-3 grid gap-3 text-lg font-semibold text-white md:text-2xl">
                <p>We build deliberately for longevity.</p>
                <p className="text-gray-200">We respect culture as infrastructure.</p>
                <p className="text-gray-300">
                  Africa does not need more noise. It needs better systems.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section className="bg-black py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Our Companies
                </p>
                <h2 className="mt-2 text-xl font-semibold">
                  An ecosystem of stories, products, and platforms.
                </h2>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="max-w-md text-xs text-gray-400">
                Each subsidiary operates with its own identity and focus, while Savvy Gorilla provides the long-term
                strategy, technology standards, and brand stewardship.
              </p>
            </Reveal>
          </div>

          <CompanyGrid />
        </Container>
      </section>
    </>
  );
}
