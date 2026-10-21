import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {site.operator}. {site.name} is a product of {site.operator}.
        </span>
        <nav aria-label="Legal" className="flex flex-wrap gap-6">
          <Link href="/privacy" className="hover:text-fg">Privacy policy</Link>
          <Link href="/terms" className="hover:text-fg">Terms of service</Link>
          <a href={`mailto:${site.contactEmail}`} className="hover:text-fg">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
