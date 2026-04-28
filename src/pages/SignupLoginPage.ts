// path: src/pages/SignupLoginPage.ts
import { expect, type Locator, type Page } from '@playwright/test';

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
    if (name == null || email == null) {
      throw new Error('Name and email are required to sign up.');
    }

    await this.nameInput().fill(name);
    await this.signupEmailInput().fill(email);
    await this.signupButton().click();
  }

  /**
   * Logs in with an existing account.
   */
  public async login(email: string, password: string): Promise<void> {
    if (email == null || password == null) {
      throw new Error('Email and password are required to log in.');
    }

    await this.loginEmailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

  private loginToYourAccountHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Login to your account' });
  }

  private newUserSignupHeading(): Locator {
    return this.page.getByRole('heading', { name: 'New User Signup!' });
  }

  private loginEmailInput(): Locator {
    return this.page.getByTestId('login-email');
  }

  private passwordInput(): Locator {
    return this.page.getByTestId('login-password');
  }

  private loginButton(): Locator {
    return this.page.getByTestId('login-button');
  }

  private nameInput(): Locator {
    return this.page.getByTestId('signup-name');
  }

  private signupEmailInput(): Locator {
    return this.page.getByTestId('signup-email');
  }

  private signupButton(): Locator {
    return this.page.getByTestId('signup-button');
  }
}