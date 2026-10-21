import { defineConfig } from "@playwright/test";

const port = 3100;

export default defineConfig({
  testDir: "tests/e2e",
  use: { baseURL: `http://localhost:${port}` },
  webServer: {
    command: `npm run build && npx next start -p ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
  },
});
