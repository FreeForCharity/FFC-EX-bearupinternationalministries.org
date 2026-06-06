# E2E Test Guide

End-to-end tests for the Bearup International Ministries site, run with Playwright
against a production (`npm run build`) export served locally.

## Running

```bash
npm run build          # produce ./out
npm run test:e2e       # run all specs
npm run test:e2e:ui    # interactive UI mode
npm run test:e2e:headed
```

These specs also run in CI as part of the **Test and Build** job (`.github/workflows/ci.yml`):
unit tests → Playwright browser install → `next build` → `npm run test:e2e`.

## Spec files

| Spec | Covers |
| ---- | ------ |
| `bearup-home.spec.ts` | Header brand + anchor nav, every home section (`#hero`…`#faq`), key headings, the Give/Zeffy link, the "Plan Your Visit" CTA, the mobile drawer, and the footer |
| `axe.spec.ts` | `@axe-core/playwright` guardrail — fails on NEW serious/critical WCAG 2.x A/AA violations (pre-existing `color-contrast` is allowlisted) |
| `cookie-consent.spec.ts` | Cookie banner + preferences modal |
| `copyright.spec.ts` | Footer copyright line (org name + current year) |
| `google-tag-manager.spec.ts` | GTM dataLayer + script injection |
| `head-meta.spec.ts` | Head contract: CSP meta, OG, manifest link, robots, sitemap, security.txt |
| `skip-to-content.spec.ts` | Skip link → `#main-content` |

## Configuration

Content-specific expectations live in `tests/test.config.ts` (a single source of
truth so a future re-brand only edits one file):

```typescript
export const testConfig = {
  copyright: {
    text: 'Bearup International Ministries. All rights reserved.',
    searchText: 'All rights reserved',
  },
  googleTagManager: { id: 'GTM-TQ5H8HPR' },
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: { acceptAll: 'Accept All', declineAll: 'Decline All', customize: 'Customize', savePreferences: 'Save Preferences', cancel: 'Cancel' },
  },
}
```

## Notes

- Selectors target stable section ids and ARIA roles rather than styling, so cosmetic
  changes don't break them.
- The mobile drawer closes via an off-screen CSS transform (not `display:none`), which
  Playwright does not treat as "hidden" — assert the control, not visibility state.
- `axe.spec.ts` waits for `load` rather than `networkidle`: analytics beacons keep the
  network busy in CI, so `networkidle` flakes into timeouts.

## Further reading

- [Playwright docs](https://playwright.dev/docs/intro)
- [Writing tests](https://playwright.dev/docs/writing-tests)
