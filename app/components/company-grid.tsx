import Link from "next/link";

type Company = {
  name: string;
  description: string;
  tag: string;
  href?: string;
};

const companies: Company[] = [
  {
    name: "Savvy Rilla",
    tag: "Media & Culture",
    description:
      "Storytelling, podcasts, and cultural projects that amplify African voices.",
    href: "https://savvyrilla.tech"
  },
  {
    name: "Savvy Rilla Studios",
    tag: "Production",
    description:
      "Cinematic production for podcasts, documentaries, and branded content.",
    href: "https://studios.savvygorilla.tech"
  },
  {
    name: "Gorilla Ledger™",
    tag: "Fintech",
    description:
      "Modern financial tracking for individuals and small teams across Africa.",
    href: "https://gorillaledger.savvyrilla.tech"
  },
  {
    name: "Roots Family Tree",
    tag: "Heritage",
    description:
      "A digital home for family lineage, memory, and intergenerational storytelling."
  },
  {
    name: "Savvy Rilla FX API",
    tag: "APIs & Data",
    description:
      "Developer-first FX and financial data services built for African markets."
  },
  {
    name: "Our Matriline Podcast",
    tag: "Podcast",
    description:
      "Girlhood, womanhood, and the journey in between—through African matrilineal stories."
  },
  {
    name: "War Towards Purpose",
    tag: "Docu-series",
    description:
      "Documenting the lives of freedom fighters, families, and leaders before history forgets them."
  },
  {
    name: "Savvy Rilla Foundation",
    tag: "Impact",
    description:
      "Emerging initiatives in gender equality, health awareness, youth empowerment, and digital literacy."
  }
];

export default function CompanyGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {companies.map((company) => (
        <div
          key={company.name}
          className="flex flex-col justify-between rounded-2xl border border-border bg-muted/40 p-6 transition hover:bg-muted/80"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
              {company.tag}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {company.name}
            </h3>
            <p className="mt-2 text-sm text-gray-300">{company.description}</p>
          </div>
          {company.href && (
            <div className="mt-4">
              <a
                href={company.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-gray-200 underline underline-offset-4 hover:text-white"
              >
                Visit {company.name}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
