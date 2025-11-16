import Container from "../components/container";

export default function InnovationPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Innovation
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            A product and platform mindset.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            From Next.js apps and Supabase-backed platforms to custom APIs and
            automation, Savvy Gorilla defines standards for how products are
            designed, shipped, and maintained across the ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-muted/40 p-5">
            <h2 className="text-sm font-semibold">Technology Stack</h2>
            <p className="mt-2 text-xs text-gray-300">
              Modern JavaScript frameworks, cloud-native hosting, and
              developer-first architectures — optimised for rapid iteration and
              long-term maintainability.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-5">
            <h2 className="text-sm font-semibold">Design & UX</h2>
            <p className="mt-2 text-xs text-gray-300">
              Minimalist interfaces, accessible design, and clear user journeys
              ensure each product feels reliable, intuitive, and distinctly
              African.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-5">
            <h2 className="text-sm font-semibold">Research & Pipeline</h2>
            <p className="mt-2 text-xs text-gray-300">
              Emerging work in fintech, digital heritage, media tooling, and
              workflow automation forms the backbone of Savvy Gorilla&apos;s
              product roadmap.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
