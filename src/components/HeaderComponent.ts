// path: src/components/HeaderComponent.ts
import { expect, type Locator } from '@playwright/test';

import { ROUTES } from '../constants/routes';
import { BaseComponent } from './BaseComponent';

/**
 * Models the primary site header navigation.
 */
export class HeaderComponent extends BaseComponent {
  /**
   * Verifies that the primary navigation links are visible.
   */
  public async expectNavigationVisible(): Promise<void> {
    await this.expectVisible(this.homeLink());
    await this.expectVisible(this.productsLink());
  }

  /**
   * Opens the Products page through the header navigation.
   */
  public async openProducts(): Promise<void> {
    await this.productsLink().click();
  }

  /**
   * Opens the Cart page through the header navigation.
   */
  public async openCart(): Promise<void> {
    await this.cartLink().click();
  }

  /**
   * Opens the Signup / Login page through the header navigation.
   */
  public async openSignupLogin(): Promise<void> {
    await this.signupLoginLink().click();
  }

  /**
   * Opens the Delete Account page through the header navigation.
   */
  public async openDeleteAccount(): Promise<void> {
    await this.deleteAccountLink().click();
  }

  /**
   * Verifies that the current user is shown as logged in.
   */
  public async expectLoggedInAs(name: string): Promise<void> {
    await expect(this.page.getByRole('banner')).toContainText(`Logged in as ${name}`);
  }

  /**
   * Verifies that the browser navigated to the Products page.
   */
  public async expectProductsPageOpened(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`${ROUTES.products}/?$`));
  }

  private homeLink(): Locator {
    return this.page.getByRole('link', { name: 'Home' });
  }

  private productsLink(): Locator {
    return this.page.getByRole('link', { name: 'Products' });
  }

  private cartLink(): Locator {
    return this.page.getByRole('link', { name: 'Cart' });
  }

  private signupLoginLink(): Locator {
    return this.page.getByRole('link', { name: 'Signup / Login' });
  }

  private deleteAccountLink(): Locator {
    return this.page.getByRole('link', { name: 'Delete Account' });
  }

}
