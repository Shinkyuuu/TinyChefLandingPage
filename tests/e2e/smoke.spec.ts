import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/support", "/community-guidelines", "/delete-account", "/privacy", "/terms"];

for (const route of routes) {
  test(`${route} loads, has one h1 and no serious accessibility violations`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toBeVisible();
    // Reveals are animated in, so wait for them to settle before checking contrast.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.reload();
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag22aa"]).analyze();
    const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(
      serious,
      JSON.stringify(
        serious.map((v) => [v.id, v.nodes.map((n) => n.target)]),
        null,
        2,
      ),
    ).toEqual([]);
  });
}

test("unknown routes show the branded 404", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "That page is not on the menu" })).toBeVisible();
});

test("menu opens, and the skip link targets main", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("#site-menu").getByRole("link", { name: "Support" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
  await expect(page.locator('a[href="#main"]')).toHaveCount(1);
});
