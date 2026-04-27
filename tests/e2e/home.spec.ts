// path: tests/e2e/home.spec.ts
import { expect, test } from '../../src/fixtures/baseTest';

/**
 * Covers the Automation Exercise homepage smoke flow.
 */
test.describe('Home page', () => {
  /**
   * Verifies that the main landing page is displayed.
   */
  test('should display the homepage content', async ({ homePage }) => {
    await homePage.open();
    await homePage.expectLoaded();
  });

  /**
   * Verifies that the header component can navigate to the Products page.
   */
  test('should navigate to products from the header', async ({ headerComponent, homePage, page }) => {
    await homePage.open();
    await headerComponent.expectNavigationVisible();
    await headerComponent.openProducts();
    await headerComponent.expectProductsPageOpened();

    await expect(page).toHaveURL(/automationexercise\.com\/products\/?$/);
  });
});
