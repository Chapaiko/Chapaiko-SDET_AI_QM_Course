// path: src/pages/CartPage.ts
import { expect, type Locator, type Page } from '@playwright/test';

import { ROUTES } from '../constants/routes';
import type { CartProduct } from '../test-data/productData';
import { BasePage } from './BasePage';

/**
 * Models the shopping cart page.
 */
export class CartPage extends BasePage {
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Verifies that the Cart page is displayed.
   */
  public async expectLoaded(): Promise<void> {
    await this.expectUrl(new RegExp(`${ROUTES.cart}/?$`));
    await expect(this.cartLink()).toBeVisible();
  }

  /**
   * Verifies that the expected product is displayed in the cart with the correct values.
   */
  public async expectProductAdded(product: CartProduct, rowIndex: number): Promise<void> {
    const row = this.cartRow(rowIndex);
    const cells = row.getByRole('cell');

    await expect(cells.nth(1)).toContainText(product.name);
    await expect(cells.nth(1)).toContainText(product.description);
    await expect(cells.nth(2)).toContainText(product.price);
    await expect(cells.nth(3)).toContainText(product.quantity);
    await expect(cells.nth(4)).toContainText(product.total);
  }

  private cartLink(): Locator {
    return this.page.getByRole('link', { name: 'Cart' });
  }

  private cartRow(rowIndex: number): Locator {
    return this.page.getByRole('row').nth(rowIndex + 1);
  }
}