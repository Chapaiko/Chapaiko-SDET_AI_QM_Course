// path: src/pages/ProductsPage.ts
import { expect, type Page } from '@playwright/test';

import { CategorySidebarComponent } from '../components/CategorySidebarComponent';
import type { CartProduct } from '../test-data/productData';
import { ROUTES } from '../constants/routes';
import { BasePage } from './BasePage';

/**
 * Models the products listing page.
 */
export class ProductsPage extends BasePage {
  private readonly categorySidebar: CategorySidebarComponent;

  public constructor(page: Page) {
    super(page);
    this.categorySidebar = new CategorySidebarComponent(page);
  }

  /**
   * Opens the Products page through the header navigation.
   */
  public async openFromHeader(): Promise<void> {
    await expect(this.productsNavLink()).toBeVisible();
    await this.productsNavLink().click();
  }

  /**
   * Verifies that the Products page is displayed.
   */
  public async expectLoaded(): Promise<void> {
    await this.expectUrl(new RegExp(`${ROUTES.products}/?$`));
    await expect(this.productsHeading()).toBeVisible();
  }

  /**
   * Opens the Men Tshirts category from the products page sidebar.
   */
  public async openMenTshirtsCategory(): Promise<void> {
    await this.categorySidebar.expectSidebarVisible();
    await this.categorySidebar.openMenCategory();
    await this.categorySidebar.openMenTshirts();
  }

  /**
   * Opens the Women Dress category from the products page sidebar.
   */
  public async openWomenDressCategory(): Promise<void> {
    await this.categorySidebar.expectSidebarVisible();
    await this.categorySidebar.openWomenCategory();
    await this.categorySidebar.openWomenDress();
  }

  /**
   * Opens the Kids Dress category from the products page sidebar.
   */
  public async openKidsDressCategory(): Promise<void> {
    await this.categorySidebar.expectSidebarVisible();
    await this.categorySidebar.openKidsCategory();
    await this.categorySidebar.openKidsDress();
  }

  /**
   * Hovers over a product card on the products page.
   */
  public async hoverProduct(product: CartProduct): Promise<void> {
    await this.productCard(product.productIndex).scrollIntoViewIfNeeded();
    await this.productCard(product.productIndex).hover();
  }

  /**
   * Clicks the Add to cart action for a product on the products page.
   */
  public async addProductToCart(product: CartProduct): Promise<void> {
    await this.overlayAddToCartLink(product.productIndex).click();
  }

  /**
   * Opens the cart page from the add-to-cart confirmation modal.
   */
  public async viewCartFromModal(): Promise<void> {
    await this.page.getByRole('link', { name: 'View Cart' }).click();
  }

  /**
   * Closes the add-to-cart confirmation modal.
   */
  public async continueShoppingFromModal(): Promise<void> {
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
  }

  /**
   * Opens the Cart page through the header navigation.
   */
  public async openCartFromHeader(): Promise<void> {
    await this.page.getByRole('link', { name: 'Cart' }).click();
  }

  private productsHeading() {
    return this.page.getByRole('heading', { name: 'All Products' });
  }

  private productsNavLink() {
    return this.page.getByRole('link', { name: 'Products' });
  }

  private productCard(productIndex: number) {
    return this.page.locator('.product-image-wrapper').nth(productIndex);
  }

  private overlayAddToCartLink(productIndex: number) {
    return this.page.locator('.product-overlay .add-to-cart').nth(productIndex);
  }

}
