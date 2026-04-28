// path: tests/e2e/products.spec.ts
import type { CategoryProductsPage } from '../../src/pages/CategoryProductsPage';
import type { HomePage } from '../../src/pages/HomePage';
import type { ProductsPage } from '../../src/pages/ProductsPage';

import { test } from '../../src/fixtures/baseTest';

type ProductsPageFixtures = {
  categoryProductsPage: CategoryProductsPage;
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
  test('should navigate to male t-shirts', async ({ homePage, productsPage, categoryProductsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openMenTshirtsCategory();
    await categoryProductsPage.expectMaleTshirtsLoaded();
  });

  /**
   * Verifies that the user can navigate to Female dress from the products page category sidebar.
   */
  test('should navigate to female dress', async ({ homePage, productsPage, categoryProductsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openWomenDressCategory();
    await categoryProductsPage.expectFemaleDressLoaded();
  });

  /**
   * Verifies that the user can navigate to Kids dress from the products page category sidebar.
   */
  test('should navigate to kids dress', async ({ homePage, productsPage, categoryProductsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openKidsDressCategory();
    await categoryProductsPage.expectKidsDressLoaded();
  });

  /**
   * Verifies that the user can navigate between product categories from Men Tshirts to Female dress and then Kids dress.
   */
  test('should navigate between products', async ({ homePage, productsPage, categoryProductsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.openMenTshirtsCategory();
    await categoryProductsPage.expectMaleTshirtsLoaded();
    await categoryProductsPage.openWomenDressCategory();
    await categoryProductsPage.expectFemaleDressLoaded();
    await categoryProductsPage.openKidsDressCategory();
    await categoryProductsPage.expectKidsDressLoaded();
  });
});