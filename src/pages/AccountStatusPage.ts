// path: src/pages/AccountStatusPage.ts
import { expect, type Page } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Models account status screens such as account created and deleted.
 */
export class AccountStatusPage extends BasePage {
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Verifies that the account created message is displayed.
   */
  public async expectAccountCreated(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Account Created!' })).toBeVisible();
  }

  /**
   * Verifies that the account deleted message is displayed.
   */
  public async expectAccountDeleted(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible();
  }

  /**
   * Continues from the account status screen.
   */
  public async continue(): Promise<void> {
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}