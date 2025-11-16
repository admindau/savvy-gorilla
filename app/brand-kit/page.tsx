import Container from "../components/container";
import Link from "next/link";

export default function BrandKitPage() {
  return (
    <section className="bg-black py-16">
      <Container className="space-y-10">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gray-500">
            Brand Kit
          </p>
          <h1 className="mt-3 text-2xl font-semibold">
            Brand assets for partners and collaborators.
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            This page provides core visual elements for Savvy Gorilla
            Technologies™. For custom usage, co-branding, or campaign-specific
            materials, please{" "}
            <Link href="/contact" className="underline underline-offset-4">
              contact the team
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="text-sm font-semibold text-white">Logos</h2>
            <p className="mt-2 text-xs text-gray-300">
              Primary mark in black-on-white and white-on-black. Use the white
              mark on dark backgrounds and the black mark on light backgrounds.
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <a
                href="/logos/savvy-gorilla-black.png"
                className="block underline underline-offset-4 hover:text-gray-100"
              >
                Download black logo (PNG)
              </a>
              <a
                href="/logos/savvy-gorilla-white.png"
                className="block underline underline-offset-4 hover:text-gray-100"
              >
                Download white logo (PNG)
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="text-sm font-semibold text-white">
              Colors & Typography
            </h2>
            <p className="mt-2 text-xs text-gray-300">
              The parent company identity is intentionally minimal and
              monochrome.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-gray-300">
              <li>
                <span className="font-semibold text-white">Black:</span>{" "}
                #000000
              </li>
              <li>
                <span className="font-semibold text-white">White:</span>{" "}
                #FFFFFF
              </li>
              <li>
                <span className="font-semibold text-white">
                  Charcoal (optional):
                </span>{" "}
                #0D0D0D
              </li>
              <li>
                <span className="font-semibold text-white">
                  Light Grey (optional):
                </span>{" "}
                #F2F2F2
              </li>
            </ul>
            <p className="mt-3 text-xs text-gray-300">
              Recommended typeface:{" "}
              <span className="font-semibold text-white">Inter</span> for both
              headings and body copy, with wide letter spacing for uppercase
              labels.
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-[0.7rem] text-gray-500">
          Do not stretch, recolor, or add effects to the Savvy Gorilla logo. For
          bespoke layouts or campaign visual systems, coordinate with Savvy
          Gorilla Studios or the central brand team.
        </p>
      </Container>
    </section>
  );
}
