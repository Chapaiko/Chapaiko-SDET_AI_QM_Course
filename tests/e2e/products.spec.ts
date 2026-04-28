// path: tests/e2e/products.spec.ts
import type { AppFixtures } from '../../src/fixtures/baseTest';

import { test } from '../../src/fixtures/baseTest';

/**
 * Covers products navigation smoke flow.
 */
test.describe('Products page', () => {
  /**
   * Verifies that the user can navigate to the Products page from the home page header.
   */
  test('should navigate to products from the header', async ({ homePage, productsPage }: AppFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
  });

  /**
   * Verifies that the user can navigate to Male T-shirts from the products page category sidebar.
   */
  test('should navigate to male t-shirts', async ({ homePage, productsPage, categoryProductsPage }: AppFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openMenTshirtsCategory();
    await categoryProductsPage.expectMaleTshirtsLoaded();
  });

  /**
   * Verifies that the user can navigate to Female dress from the products page category sidebar.
   */
  test('should navigate to female dress', async ({ homePage, productsPage, categoryProductsPage }: AppFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openWomenDressCategory();
    await categoryProductsPage.expectFemaleDressLoaded();
  });
});