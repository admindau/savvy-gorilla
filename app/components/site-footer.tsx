import Container from "./container";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-black">
      <Container className="py-10 text-xs text-gray-400">
        <div className="grid gap-8 md:grid-cols-[2fr,1.4fr,1.4fr]">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Savvy Gorilla Technologies™
            </p>
            <p className="mt-3 text-sm text-gray-200">
              Where African innovation begins.
            </p>
            <p className="mt-3 max-w-sm">
              A modern African holding company at the intersection of
              storytelling, software, and social impact.
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Ecosystem
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/ecosystem" className="hover:text-gray-200">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-gray-200">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/brand-kit" className="hover:text-gray-200">
                  Brand Kit & Assets
                </Link>
              </li>
              <li>
                <a
                  href="https://savvyrilla.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-200"
                >
                  Savvy Rilla (Media)
                </a>
              </li>
              <li>
                <a
                  href="https://gorillaledger.savvyrilla.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-200"
                >
                  Gorilla Ledger™ (Fintech)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Contact
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@savvygorilla.tech"
                  className="text-gray-200 hover:text-white"
                >
                  info@savvygorilla.tech
                </a>
              </li>
              <li>Location: Juba, South Sudan</li>
              <li>
                <Link href="/partnerships" className="hover:text-gray-200">
                  Partnership Enquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border/60 pt-4 text-[0.7rem] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Savvy Gorilla Technologies™. All rights reserved.</p>
          <p className="flex gap-3">
            <span>Parent company of Savvy Rilla, Gorilla Ledger™, and more.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
