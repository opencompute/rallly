import { test } from "@playwright/test";
import { deleteAllMessages, loginWithEmail } from "@rallly/test-helpers";
import { screenshotPath } from "./helpers";

test.beforeAll(async () => {
  await deleteAllMessages();
});

test("dashboard", async ({ page }) => {
  await loginWithEmail(page, { email: "dev@kinpal.com" });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: screenshotPath("dashboard"), fullPage: true });
});
