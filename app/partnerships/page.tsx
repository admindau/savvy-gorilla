import Container from "../components/container";

export default function PartnershipsPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Partnerships
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            Build with Savvy Gorilla.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            We collaborate with institutions, media houses, development
            partners, NGOs, and private sector organisations that are serious
            about African innovation. From co-produced content to joint product
            development, we design partnerships that are clear, focused, and
            measurable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="text-sm font-semibold">Media & Storytelling</h2>
            <p className="mt-2 text-xs text-gray-300">
              Partner with Savvy Rilla and Savvy Rilla Studios on podcasts,
              docu-series, campaigns, and narrative projects.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="text-sm font-semibold">Technology & Products</h2>
            <p className="mt-2 text-xs text-gray-300">
              Collaborate on fintech, APIs, and digital platforms designed for
              African markets and diasporas.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          To explore partnership opportunities, please reach out via the contact
          page with a short summary of your organisation, goals, and desired
          area of collaboration.
        </p>
      </Container>
    </section>
  );
}
