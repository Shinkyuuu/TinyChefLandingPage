import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/ThemeToggle";
import { mockMatchMedia } from "./setup";

describe("ThemeToggle", () => {
  it("switches to dark, stores the choice, then switches back", async () => {
    mockMatchMedia(() => false);
    render(<ThemeToggle />);
    const button = await screen.findByRole("button", { name: "Switch to dark theme" });
    await userEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    await userEvent.click(screen.getByRole("button", { name: "Switch to light theme" }));
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("starts in dark when the system prefers dark", async () => {
    mockMatchMedia((q) => q.includes("dark"));
    render(<ThemeToggle />);
    expect(await screen.findByRole("button", { name: "Switch to light theme" })).toBeInTheDocument();
  });
});
