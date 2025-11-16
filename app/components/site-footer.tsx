import Container from "./container";
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-black">
      <Container className="flex flex-col gap-6 py-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-gray-300">
            © {year} Savvy Gorilla Technologies™.
          </p>
          <p>Where African Innovation Begins.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/partnerships" className="hover:text-gray-200">
            Partnerships
          </Link>
          <Link href="/ecosystem" className="hover:text-gray-200">
            Our Ecosystem
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
