import Container from "../components/container";

export default function AboutPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            About
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            Building an African ecosystem for creativity and technology.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Savvy Gorilla Technologies™ is a holding company founded to bridge
            creative storytelling, software engineering, and social impact. We
            assemble teams, infrastructure, and long-term vision so that each
            subsidiary can focus on what it does best.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold">Mission</h2>
            <p className="mt-2 text-sm text-gray-300">
              To build and support African innovations that empower creators,
              strengthen communities, and accelerate technological
              transformation across the continent.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Vision</h2>
            <p className="mt-2 text-sm text-gray-300">
              A united African ecosystem where creativity, technology, and
              culture drive progress and prosperity on a global scale.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Core Values</h2>
          <ul className="mt-3 grid gap-3 text-sm text-gray-300 md:grid-cols-2">
            <li>
              <span className="font-medium text-white">Innovation First.</span>{" "}
              We build solutions for today with a clear view of tomorrow.
            </li>
            <li>
              <span className="font-medium text-white">Cultural Integrity.</span>{" "}
              Every product honors African stories, identity, and context.
            </li>
            <li>
              <span className="font-medium text-white">
                Community-Centred Design.
              </span>{" "}
              Real people, real problems, real impact.
            </li>
            <li>
              <span className="font-medium text-white">
                Excellence Without Compromise.
              </span>{" "}
              We sweat the details.
            </li>
            <li>
              <span className="font-medium text-white">
                Collaboration & Partnership.
              </span>{" "}
              We grow by building with others.
            </li>
            <li>
              <span className="font-medium text-white">Visionary Boldness.</span>{" "}
              We are not afraid to think and build at scale.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
