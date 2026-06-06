import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Footer Copyright Notice Tests
 *
 * Verify that the footer copyright line:
 * 1. Contains the copyright symbol (©) and the current year
 * 2. Renders the organization's copyright text
 *
 * Note: expectations use values from test.config.ts for easy customization.
 */

test.describe('Footer Copyright Notice', () => {
  test('should display copyright notice with current year', async ({ page }) => {
    await page.goto('/')

    const currentYear = new Date().getFullYear()

    // Locate the footer paragraph containing the copyright text.
    const footerText = page.locator(`footer p:has-text("${testConfig.copyright.searchText}")`)

    await expect(footerText).toBeVisible()
    await expect(footerText).toContainText(`© ${currentYear}`)
    await expect(footerText).toContainText(testConfig.copyright.text)
  })
})
