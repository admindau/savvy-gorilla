import Container from "../components/container";
import CompanyGrid from "../components/company-grid";

export default function EcosystemPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Ecosystem
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            The Savvy Gorilla ecosystem.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Each company within Savvy Gorilla focuses on a specific layer of
            value: cultural storytelling, software products, production,
            financial tools, or social impact. Together they form a connected
            ecosystem led by a shared strategy and a commitment to African
            innovation.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            You can now access our live FX and financial data platform here:{" "}
            <a
              href="https://fx.savvyrilla.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              Savvy Rilla FX API ↗
            </a>
            .
          </p>
        </div>

        <CompanyGrid />
      </Container>
    </section>
  );
}
