"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const set = document.documentElement.dataset.theme;
    if (set === "light" || set === "dark") setTheme(set);
    else setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The choice still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-11 cursor-pointer place-items-center rounded-full text-fg transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary-light active:scale-[0.98]"
    >
      {theme === "dark" ? <SunIcon size={20} weight="regular" /> : <MoonIcon size={20} weight="regular" />}
    </button>
  );
}
