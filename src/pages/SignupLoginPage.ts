// path: src/pages/SignupLoginPage.ts
import { expect, type Page } from '@playwright/test';

import { BasePage } from './BasePage';

/**
 * Models the signup and login page.
 */
export class SignupLoginPage extends BasePage {
  public constructor(page: Page) {
    super(page);
  }

  /**
   * Verifies that the new user signup section is displayed.
   */
  public async expectNewUserSignupVisible(): Promise<void> {
    await expect(this.newUserSignupHeading()).toBeVisible();
  }

  /**
   * Verifies that the login section is displayed.
   */
  public async expectLoginToYourAccountVisible(): Promise<void> {
    await expect(this.loginToYourAccountHeading()).toBeVisible();
  }

  /**
   * Starts the signup flow with a name and email address.
   */
  public async signUp(name: string, email: string): Promise<void> {
    await this.nameInput().fill(name);
    await this.signupEmailInput().fill(email);
    await this.signupButton().click();
  }

  /**
   * Logs in with an existing account.
   */
  public async login(email: string, password: string): Promise<void> {
    await this.loginEmailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  private loginToYourAccountHeading() {
    return this.page.getByRole('heading', { name: 'Login to your account' });
  }

  private newUserSignupHeading() {
    return this.page.getByRole('heading', { name: 'New User Signup!' });
  }

  private loginEmailInput() {
    return this.page.getByRole('textbox', { name: 'Email Address' }).first();
  }

  private passwordInput() {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  private loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  private nameInput() {
    return this.page.getByRole('textbox', { name: 'Name' });
  }

  private signupEmailInput() {
    return this.page.getByRole('textbox', { name: 'Email Address' }).nth(1);
  }

  private signupButton() {
    return this.page.getByRole('button', { name: 'Signup' });
  }
}