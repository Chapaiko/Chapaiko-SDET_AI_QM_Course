// path: src/pages/CategoryProductsPage.ts
import { expect, type Page } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Models category-based product listing pages.
 */
export class CategoryProductsPage extends BasePage {
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Verifies that the Men Tshirts category page is displayed.
   */
  public async expectMaleTshirtsLoaded(): Promise<void> {
    await this.expectUrl(/\/category_products\/3\/?$/);
    await expect(this.maleTshirtsHeading()).toBeVisible();
  }

  /**
   * Verifies that the Female dress category page is displayed.
   */
  public async expectFemaleDressLoaded(): Promise<void> {
    await this.expectUrl(/\/category_products\/1\/?$/);
    await expect(this.femaleDressHeading()).toBeVisible();
  }

  /**
   * Verifies that the Kids dress category page is displayed.
   */
  public async expectKidsDressLoaded(): Promise<void> {
    await this.expectUrl(/\/category_products\/4\/?$/);
    await expect(this.kidsDressHeading()).toBeVisible();
  }

  private maleTshirtsHeading() {
    return this.page.getByRole('heading', { name: /Men - Tshirts Products/i });
  }

  private femaleDressHeading() {
    return this.page.getByRole('heading', { name: /Women - Dress Products/i });
  }

  private kidsDressHeading() {
    return this.page.getByRole('heading', { name: /Kids - Dress Products/i });
  }
}