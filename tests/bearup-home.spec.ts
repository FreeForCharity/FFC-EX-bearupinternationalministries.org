import { test, expect } from '@playwright/test'

/**
 * Bearup International Ministries — home page coverage.
 *
 * Exercises the structural pieces of the single-page church site: the header
 * (brand, anchor nav, CTA, mobile drawer), each home section, the Give
 * (Zeffy) link, and the footer. Selectors target stable section ids and
 * roles rather than styling, so they survive cosmetic changes.
 */

// Section ids rendered by the Bearup* home components, in document order.
const SECTION_IDS = [
  'hero',
  'scripture',
  'about',
  'visit',
  'ministries',
  'schedule',
  'leadership',
  'board',
  'give',
  'faq',
] as const

// Anchor targets used by the header navigation.
const NAV_HREFS = [
  '#about',
  '#visit',
  '#ministries',
  '#schedule',
  '#leadership',
  '#board',
  '#give',
] as const

test.describe('Bearup home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders the header with the Bearup brand', async ({ page }) => {
    const header = page.getByRole('banner')
    await expect(header).toBeVisible()
    await expect(header.getByText('Bearup International').first()).toBeVisible()
  })

  test('header links to every primary section anchor', async ({ page }) => {
    const header = page.getByRole('banner')
    for (const href of NAV_HREFS) {
      await expect(header.locator(`a[href="${href}"]`).first()).toHaveCount(1)
    }
  })

  test('all home sections are present in the DOM', async ({ page }) => {
    for (const id of SECTION_IDS) {
      await expect(page.locator(`#${id}`)).toHaveCount(1)
    }
  })

  test('key section headings are visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Our Ministries' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Our Leadership' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Board of Directors' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible()
  })

  test('Give section links to the Zeffy donation form', async ({ page }) => {
    const zeffyLinks = page.locator('#give a[href*="zeffy.com"]')
    await expect(zeffyLinks.first()).toHaveCount(1)
    await expect(zeffyLinks.first()).toHaveAttribute('href', /zeffy\.com/)
  })

  test('exposes a "Plan Your Visit" call to action', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Plan Your Visit' }).first()).toBeVisible()
  })

  test('mobile drawer opens via the hamburger button', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    // On mobile the desktop nav is hidden; the hamburger opens the drawer.
    const drawerNav = page.getByLabel('Mobile menu')
    await page.getByRole('button', { name: 'Open menu' }).click()
    await expect(drawerNav.getByText('Home')).toBeVisible()

    // The close control is present and clickable while the drawer is open.
    // (The drawer closes via an off-screen CSS transform, which Playwright
    // does not treat as "hidden", so we assert the control rather than state.)
    await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible()
  })

  test('footer shows the org, a contact email, and the current year', async ({ page }) => {
    const footer = page.getByRole('contentinfo')
    await expect(footer).toBeVisible()
    await expect(footer.getByText('Bearup International Ministries').first()).toBeVisible()
    await expect(footer.locator('a[href^="mailto:"]').first()).toHaveCount(1)
    await expect(footer.getByText(new RegExp(`${new Date().getFullYear()}`))).toBeVisible()
  })
})
