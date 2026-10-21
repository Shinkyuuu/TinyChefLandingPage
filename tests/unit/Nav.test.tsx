import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nav } from "@/components/Nav";
import { mockMatchMedia } from "./setup";

vi.mock("next/navigation", () => ({ usePathname: () => "/support" }));

describe("Nav", () => {
  it("opens and closes the menu with the button and Escape", async () => {
    mockMatchMedia(() => false);
    render(<Nav />);
    const button = screen.getByRole("button", { name: "Open menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(button);
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    await userEvent.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("marks the current page in the menu", () => {
    mockMatchMedia(() => false);
    render(<Nav />);
    expect(screen.getByText("Support", { selector: "a" })).toHaveAttribute("aria-current", "page");
  });
});
