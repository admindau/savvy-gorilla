import Container from "../components/container";

export default function CeoLetterPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
            CEO Letter
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            Why Savvy Gorilla exists.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Savvy Gorilla Technologies™ started as a simple idea: that African
            stories, products, and people deserve infrastructure that takes them
            seriously. Not as an afterthought, not as a side project, but as a
            centre of gravity.
          </p>
        </div>

        <div className="max-w-3xl space-y-4 text-sm text-gray-300">
          <p>
            Over the years, we have seen how fragmented our ecosystems can be.
            Talented creators work alone, powerful stories fade without being
            documented, and promising products never get the technology or
            structure they need to grow. Savvy Gorilla was created to respond to
            that gap.
          </p>
          <p>
            As a holding company, our role is not to be in the spotlight. Our
            role is to design the systems behind the work: the product
            frameworks, the technology stack, the brand architecture, and the
            long-term partnerships that allow ideas to move from concept to
            reality.
          </p>
          <p>
            From <span className="font-medium text-white">Gorilla Ledger™</span>{" "}
            in fintech, to{" "}
            <span className="font-medium text-white">Our Matriline</span> and{" "}
            <span className="font-medium text-white">
              War Towards Purpose
            </span>{" "}
            in storytelling, each subsidiary reflects a belief that Africans can
            build world-class work while remaining rooted in context, culture,
            and community.
          </p>
          <p>
            We are still at the beginning of this journey. But the direction is
            clear: build deliberately, collaborate widely, document carefully,
            and always create with the next generation in mind.
          </p>
          <p>
            If you see alignment with what you&apos;re building or imagining,
            we would be glad to explore collaboration.
          </p>
        </div>

        <div className="max-w-3xl border-t border-border/70 pt-6 text-sm text-gray-300">
          <p className="font-semibold text-white">Dau Atem Garang</p>
          <p className="text-xs text-gray-400">
            Founder & Chief Executive, Savvy Gorilla Technologies™
          </p>
        </div>
      </Container>
    </section>
  );
}
