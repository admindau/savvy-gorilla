import Container from "../components/container";

export default function ContactPage() {
  return (
    <section className="bg-black py-16">
      <Container className="grid gap-10 md:grid-cols-[2fr,1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            For partnerships, media, or product enquiries, you can reach the
            Savvy Gorilla team using the details below. For project-specific
            queries, include the subsidiary name in your message.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              info@savvygorilla.tech
            </p>
            <p>
              <span className="font-semibold text-white">Location:</span> Juba,
              South Sudan (East African Community)
            </p>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            A structured contact form can be added here later (with backend or
            external form service) once we define how enquiries should be
            routed.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-muted/40 p-6 text-xs text-gray-300">
          <h2 className="text-sm font-semibold text-white">
            Typical enquiry types
          </h2>
          <ul className="mt-3 space-y-2">
            <li>• Co-producing a podcast or docu-series</li>
            <li>• Commissioning creative or production work</li>
            <li>• Exploring product or fintech collaborations</li>
            <li>• Speaking, workshops, or panel invitations</li>
            <li>• General questions about the ecosystem</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
