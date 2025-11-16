import Container from "../components/container";

export default function LeadershipPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
            Leadership
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            Guided by builders, storytellers, and strategists.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Savvy Gorilla Technologies™ is led by a core team that spans
            technology, communications, media production, and strategy. The
            leadership group holds together the ecosystem while each subsidiary
            focuses on execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/40 p-6 opacity-0 animate-fade-up">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 bg-muted/60 text-xs font-semibold text-accent">
                DG
              </div>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Founder & Chief Executive
                </p>
                <h2 className="mt-1 text-sm font-semibold text-white">
                  Dau Atem Garang
                </h2>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Dau leads the overall vision, technology direction, and ecosystem
              strategy for Savvy Gorilla. With a background in systems
              administration, web development, and digital product design, he
              focuses on building infrastructure that can support multiple
              products, brands, and collaborations over time.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-6 opacity-0 animate-fade-up">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 bg-muted/60 text-xs font-semibold text-accent">
                AA
              </div>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Co-Founder & Creative Director
                </p>
                <h2 className="mt-1 text-sm font-semibold text-white">
                  Achom Atem
                </h2>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Achom oversees the creative direction across podcasts,
              docu-series, and visual storytelling. Bringing experience from
              communications, public information, and media production, she
              anchors the narrative and human side of the Savvy Gorilla
              ecosystem.
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-xs text-gray-500">
          Additional advisors and collaborators are engaged on a project basis
          across legal, finance, engineering, and media, depending on the needs
          of each subsidiary.
        </p>
      </Container>
    </section>
  );
}
