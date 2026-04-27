// path: tests/e2e/home.spec.ts
import { test } from '../../src/fixtures/baseTest';

/**
 * Covers the basic home page navigation flow.
 */
test.describe('Home page', () => {
  /**
   * Verifies that the main landing page and docs navigation are accessible.
   */
  test('should open the home page and navigate to docs', async ({ homePage, headerComponent }) => {
    await homePage.open();
    await homePage.expectLoaded();
    await headerComponent.expectDocsLinkVisible();
    await headerComponent.clickDocs();
    await headerComponent.expectDocsPageOpened();
  });
});
