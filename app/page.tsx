import Container from "./components/container";
import CompanyGrid from "./components/company-grid";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="border-b border-border bg-black">
        <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:items-center">
          
          {/* LEFT SIDE – TEXT */}
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

          {/* RIGHT SIDE – LOGO */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/logos/savvy-gorilla-white.png"
              alt="Savvy Gorilla Logo"
              className="h-40 w-40 opacity-0 animate-fade-up"
            />
          </div>
        </Container>
      </section>

      {/* ECOSYSTEM SECTION */}
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
