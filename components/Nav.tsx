"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/lib/site";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

const ease = "ease-[cubic-bezier(0.32,0.72,0,1)]";
const staggers = ["delay-100", "delay-150", "delay-200", "delay-300"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="pointer-events-auto mx-auto mt-6 flex w-max items-center gap-2 rounded-full border border-border bg-surface/80 py-1 pl-4 pr-1 backdrop-blur-xl"
      >
        <Link href="/" className="font-display text-xl text-fg" aria-current={pathname === "/" ? "page" : undefined}>
          {site.name}
        </Link>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative size-11 cursor-pointer rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary-light active:scale-[0.98]"
        >
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-fg transition-all duration-700 ${ease} ${
              open ? "-translate-y-1/2 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-fg transition-all duration-700 ${ease} ${
              open ? "-translate-y-1/2 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </nav>

      <div
        id="site-menu"
        inert={!open}
        className={`pointer-events-auto fixed inset-0 -z-10 flex flex-col items-center justify-center gap-6 bg-bg/80 backdrop-blur-3xl transition-all duration-700 ${ease} ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {links.map((link, i) => (
          <div key={link.href} className="overflow-hidden">
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`block font-display text-5xl transition-all duration-700 ${ease} hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-fg"
              } ${staggers[i]} ${open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
}
