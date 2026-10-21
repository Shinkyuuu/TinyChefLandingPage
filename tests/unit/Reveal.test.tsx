import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { FakeIntersectionObserver, mockMatchMedia } from "./setup";

describe("Reveal", () => {
  it("shows content immediately for reduced motion", () => {
    mockMatchMedia((q) => q.includes("reduce"));
    render(<Reveal>Hello cook</Reveal>);
    expect(screen.getByText("Hello cook").className).toContain("opacity-100");
  });

  it("stays hidden until it intersects", () => {
    mockMatchMedia(() => false);
    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver);
    render(<Reveal>Hello cook</Reveal>);
    expect(screen.getByText("Hello cook").className).toContain("opacity-0");
  });
});

describe("WordReveal", () => {
  it("renders every word and activates them all for reduced motion", () => {
    mockMatchMedia((q) => q.includes("reduce"));
    const { container } = render(<WordReveal lines={["Cook what you love"]} />);
    const words = container.querySelectorAll("[data-word]");
    expect(words).toHaveLength(4);
    words.forEach((w) => expect(w).toHaveAttribute("data-on", "true"));
  });
});
