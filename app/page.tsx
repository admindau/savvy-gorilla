import Container from "./components/container";
import CompanyGrid from "./components/company-grid";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-black">
        <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl animate-fade-in">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Savvy Gorilla Technologies™
            </p>
            <div className="mt-3 h-px w-16 bg-accent" />
            <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
              Where African innovation begins.
            </h1>
            <p className="mt-4 text-sm text-gray-300 md:text-base">
              Savvy Gorilla is a modern African holding company building and
              backing products at the intersection of{" "}
              <span className="font-medium text-white">
                creativity, culture, and technology.
              </span>{" "}
              From fintech platforms to storytelling studios, we are designing
              the next generation of African solutions.
            </p>
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
            </div>
          </div>

          <div className="max-w-md rounded-3xl border border-border bg-muted/40 p-6 text-xs text-gray-300 opacity-0 animate-fade-up">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Portfolio Snapshot
            </p>
            <ul className="mt-3 space-y-2">
              <li>• Gorilla Ledger™ — modern financial tracking app</li>
              <li>• Our Matriline Podcast — girlhood to womanhood stories</li>
              <li>• War Towards Purpose — legacy docu-series</li>
              <li>• Savvy Rilla Studios — production and creative direction</li>
              <li>• FX API & Roots Family Tree in active development</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-black py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="animate-fade-in">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                Our Companies
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                An ecosystem of stories, products, and platforms.
              </h2>
            </div>
            <p className="max-w-md text-xs text-gray-400 animate-fade-in">
              Each subsidiary operates with its own identity and focus, while
              Savvy Gorilla provides the long-term strategy, technology
              standards, and brand stewardship.
            </p>
          </div>

          <CompanyGrid />
        </Container>
      </section>
    </>
  );
}
