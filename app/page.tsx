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
      <section className="border-b border-border bg-black bg-radial">
        <Container className="relative flex flex-col gap-10 py-16 md:flex-row md:items-center md:justify-between">
          {/* Watermark logo */}
          <div className="pointer-events-none absolute right-0 top-8 hidden w-[520px] opacity-[0.08] md:block">
            <img src="/logos/savvy-gorilla-white.png" alt="" className="h-auto w-full" />
          </div>

          {/* LEFT SIDE – TEXT */}
          <div className="max-w-xl">
            <Reveal>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                Savvy Gorilla Technologies™
              </p>
            </Reveal>

            <Reveal delayMs={90}>
              <div className="mt-3 h-px w-16 bg-accent" />
            </Reveal>

            <Reveal delayMs={140}>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
                Where African innovation begins.
              </h1>
            </Reveal>

            <Reveal delayMs={190}>
              <p className="mt-4 text-sm text-gray-300 md:text-base">
                Savvy Gorilla is a modern African holding company building and backing products at the intersection of{" "}
                <span className="font-medium text-white">creativity, culture, and technology.</span>{" "}
                From fintech platforms to storytelling studios, we are designing the next generation of African solutions.
              </p>
            </Reveal>

            {/* Now Building (data-driven) */}
            <Reveal delayMs={240}>
              <NowBuilding autoRotate />
            </Reveal>

            <Reveal delayMs={290}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <a
                  href="/ecosystem"
                  className="rounded-full border border-white px-4 py-2 font-medium tracking-wide transition hover:bg-white hover:text-black"
                >
                  Explore Our Ecosystem
                </a>
                <a
                  href="/partnerships"
                  className="rounded-full border border-border px-4 py-2 text-gray-300 transition hover:border-white hover:text-white"
                >
                  Partnership Opportunities
                </a>
                <a
                  href="https://fx.savvyrilla.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-gray-300 transition hover:border-white hover:text-white"
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
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/70 bg-black/80">
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

      {/* CORE PRODUCTS STRIP (product-first clarity) */}
      <section className="bg-black py-10">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border bg-muted/25 p-6 md:p-8">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                Core products
              </p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {coreProducts.slice(0, 2).map((p) => (
                  <div key={p.id} className="rounded-2xl border border-accent/25 bg-black/25 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{p.name}</p>
                      <span className="rounded-full border border-accent/35 bg-muted/50 px-3 py-1 text-[0.7rem] text-gray-100">
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-gray-300">{p.description}</p>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex w-fit text-[0.75rem] font-medium text-gray-200 underline underline-offset-4 hover:text-white"
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
            <div className="rounded-3xl border border-border bg-muted/25 p-8 md:p-10">
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
