// path: src/pages/ProductsPage.ts
import { expect, type Page } from '@playwright/test';

import { CategorySidebarComponent } from '../components/CategorySidebarComponent';
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

  private productsHeading() {
    return this.page.getByRole('heading', { name: 'All Products' });
  }

  private productsNavLink() {
    return this.page.getByRole('link', { name: 'Products' });
  }

}
