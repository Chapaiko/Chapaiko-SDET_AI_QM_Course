// path: tests/e2e/home.spec.ts
import type { HomePage } from '../../src/pages/index';
import { test } from '../../src/fixtures/baseTest';

type HomePageFixtures = {
  homePage: HomePage;
};

/**
 * Covers the Automation Exercise homepage smoke flow.
 */
test.describe('Home page', () => {
  /**
   * Verifies that the main landing page is displayed.
   */
  test('should display the homepage content', async ({ homePage }: HomePageFixtures) => {
    await homePage.open();
    await homePage.expectLoaded();
  });
});

