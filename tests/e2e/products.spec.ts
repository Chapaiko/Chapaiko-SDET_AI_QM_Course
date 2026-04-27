// path: tests/e2e/products.spec.ts
import type { HomePage, ProductsPage } from '../../src/pages/index';

import { test } from '../../src/fixtures/baseTest';

type ProductsPageFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
};

/**
 * Covers products navigation smoke flow.
 */
test.describe('Products page', () => {
  /**
   * Verifies that the user can navigate to the Products page from the home page header.
   */
  test('should navigate to products from the header', async ({ homePage, productsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
  });

  /**
   * Verifies that the user can navigate to Male T-shirts from the products page category sidebar.
   */
  test('should navigate to male t-shirts', async ({ homePage, productsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openMenTshirtsCategory();
    await productsPage.expectMenTshirtsLoaded();
  });
});