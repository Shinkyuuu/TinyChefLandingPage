import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">{site.name}</Link>
        <nav className="nav" aria-label="Main">
          <Link href="/#features">Features</Link>
          <Link href="/#download">Download</Link>
        </nav>
      </div>
    </header>
  );
}
