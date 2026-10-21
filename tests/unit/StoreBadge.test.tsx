import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StoreBadge } from "@/components/StoreBadge";

describe("StoreBadge", () => {
  it("renders a disabled coming soon badge while there is no store link", () => {
    render(<StoreBadge store="apple" />);
    expect(screen.getByText("App Store").closest("[aria-disabled]")).toHaveAttribute("aria-disabled", "true");
    expect(screen.queryByRole("link")).toBeNull();
  });
});
