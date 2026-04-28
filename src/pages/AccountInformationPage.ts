// path: src/pages/AccountInformationPage.ts
import { expect, type Page } from '@playwright/test';

import type { SignupAccount } from '../test-data/accountData';
import { BasePage } from './BasePage';

/**
 * Models the account information form used during signup.
 */
export class AccountInformationPage extends BasePage {
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Verifies that the account information form is displayed.
   */
  public async expectLoaded(): Promise<void> {
    await expect(this.enterAccountInformationHeading()).toBeVisible();
  }

  /**
   * Fills the account information form.
   */
  public async fillAccountInformation(account: SignupAccount): Promise<void> {
    const comboboxes = this.page.getByRole('combobox');

    const textboxes = this.page.getByRole('textbox');

    await this.page.getByRole('radio', { name: account.title }).check();
    await this.page.getByLabel(/^Name \*$/i).fill(account.name);
    await this.page.getByLabel(/^Password \*$/i).fill(account.password);
    await comboboxes.nth(0).selectOption(account.birthDay);
    await comboboxes.nth(1).selectOption(account.birthMonth);
    await comboboxes.nth(2).selectOption(account.birthYear);
    await this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await this.page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check();
    await this.page.getByLabel(/^First name \*$/i).fill(account.firstName);
    await this.page.getByLabel(/^Last name \*$/i).fill(account.lastName);
    await this.page.getByLabel(/^Company$/i).fill(account.company);
    await this.page.getByLabel(/^Address \* \(Street address, P\.O\. Box, Company name, etc\.\)$/i).fill(account.address);
    await this.page.getByLabel(/^Address 2$/i).fill(account.address2);
    await comboboxes.nth(3).selectOption(account.country);
    await textboxes.nth(8).fill(account.state);
    await textboxes.nth(9).fill(account.city);
    await textboxes.nth(10).fill(account.zipcode);
    await textboxes.nth(11).fill(account.mobileNumber);
  }

  /**
   * Submits the account creation form.
   */
  public async createAccount(): Promise<void> {
    await this.page.getByRole('button', { name: 'Create Account' }).click();
  }

  private enterAccountInformationHeading() {
    return this.page.getByRole('heading', { name: 'Enter Account Information' });
  }
}