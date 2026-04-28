// path: tests/e2e/products.spec.ts
import type { CartPage } from '../../src/pages/CartPage';
import type { CategoryProductsPage } from '../../src/pages/CategoryProductsPage';
import type { HomePage } from '../../src/pages/HomePage';
import type { ProductsPage } from '../../src/pages/ProductsPage';

import { test } from '../../src/fixtures/baseTest';
import { cartProducts } from '../../src/test-data/productData';

type ProductsPageFixtures = {
  cartPage: CartPage;
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

  /**
   * Verifies that the user can add a product to the cart and see the correct cart values.
   */
  test('should add product to cart', async ({ cartPage, homePage, productsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.hoverProduct(cartProducts.blueTop);
    await productsPage.addProductToCart(cartProducts.blueTop);
    await productsPage.viewCartFromModal();
    await cartPage.expectLoaded();
    await cartPage.expectProductAdded(cartProducts.blueTop, 0);
  });

  /**
   * Verifies that the user can add several products to the cart and see the correct cart values.
   */
  test('should add several products to cart', async ({ cartPage, homePage, productsPage }: ProductsPageFixtures) => {
    await homePage.open();
    await productsPage.openFromHeader();
    await productsPage.expectLoaded();
    await productsPage.hoverProduct(cartProducts.blueTop);
    await productsPage.addProductToCart(cartProducts.blueTop);
    await productsPage.continueShoppingFromModal();
    await productsPage.hoverProduct(cartProducts.menTshirt);
    await productsPage.addProductToCart(cartProducts.menTshirt);
    await productsPage.continueShoppingFromModal();
    await productsPage.openCartFromHeader();
    await cartPage.expectLoaded();
    await cartPage.expectProductAdded(cartProducts.blueTop, 0);
    await cartPage.expectProductAdded(cartProducts.menTshirt, 1);
  });
});