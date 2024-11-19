import { test, expect } from "@playwright/test"

test.describe("Web Page", () => {
  test("should display the correct title", async ({ page }) => {
    // Navigate to the page where the Web component is rendered
    await page.goto("/")

    // Check if the title is rendered
    const titleElement = page.locator("h1", { hasText: "Nest Grow Project" })
    await expect(titleElement).toBeVisible()
  })
})
