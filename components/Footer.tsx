import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href={`mailto:${site.contactEmail}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
