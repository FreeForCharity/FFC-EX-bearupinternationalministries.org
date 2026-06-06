/**
 * Test Configuration for Template Customization
 *
 * This file contains content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 */

export const testConfig = {
  /**
   * Footer Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    // Full text rendered in the footer copyright line (after the © and year).
    text: 'Bearup International Ministries. All rights reserved.',
    // Stable substring used to locate the copyright paragraph.
    searchText: 'All rights reserved',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
