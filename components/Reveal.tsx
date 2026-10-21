"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms, used to stagger siblings. */
  delay?: number;
};

// Heavy fade up as the element enters the viewport. Uses IntersectionObserver, never a scroll listener.
export function Reveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-16 opacity-0 blur-md"
      } ${className}`}
    >
      {children}
    </div>
  );
}
