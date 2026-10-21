"use client";

import { useEffect, useRef } from "react";

type Props = { lines: string[] };

// Each word moves from a muted tone to the full text colour as it crosses a trigger line,
// in reading order. One IntersectionObserver per word, no scroll listener.
export function WordReveal({ lines }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = Array.from(root.current?.querySelectorAll<HTMLElement>("[data-word]") ?? []);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => (w.dataset.on = "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          // Active while inside the band above the trigger line, or already scrolled past the top.
          const passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
          el.dataset.on = entry.isIntersecting || passed ? "true" : "false";
        }
      },
      { rootMargin: "0px 0px -35% 0px" },
    );
    words.forEach((w) => io.observe(w));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={root} className="flex max-w-170 flex-col gap-6">
      {lines.map((line) => (
        <p key={line} className="font-display text-4xl md:text-5xl">
          {line.split(" ").map((word, i) => (
            <span
              key={`${word}-${i}`}
              data-word
              data-on="false"
              className="inline-block text-fg/30 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] data-[on=true]:text-fg"
            >
              {word}
              {" "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
