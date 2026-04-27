// path: src/components/CategorySidebarComponent.ts
import { expect, type Locator } from '@playwright/test';

import { BaseComponent } from './BaseComponent';

/**
 * Models the category sidebar displayed on the storefront pages.
 */
export class CategorySidebarComponent extends BaseComponent {
  /**
   * Verifies that the category sidebar is visible.
   */
  public async expectSidebarVisible(): Promise<void> {
    await this.expectVisible(this.categoryHeading());
  }

  /**
   * Opens the Men category section.
   */
  public async openMenCategory(): Promise<void> {
    await this.menCategoryLink().click();
    await expect(this.tshirtsLink()).toBeVisible();
  }

  /**
   * Opens the Tshirts subcategory under Men.
   */
  public async openMenTshirts(): Promise<void> {
    await this.tshirtsLink().click();
  }

  private categoryHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Category' });
  }

  private menCategoryLink(): Locator {
    return this.page.getByRole('link', { name: /\bMen$/i });
  }

  private tshirtsLink(): Locator {
    return this.page.getByRole('link', { name: /^Tshirts$/i });
  }
}
