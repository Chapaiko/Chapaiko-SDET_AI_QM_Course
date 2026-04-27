// path: src/pages/HomePage.ts
import { expect } from '@playwright/test';

import { ROUTES } from '../constants/routes';
import { BasePage } from './BasePage';

/**
 * Models the application home page.
 */
export class HomePage extends BasePage {
  /**
   * Opens the home page.
   */
  public async open(): Promise<void> {
    await this.goto(ROUTES.home);
  }

  /**
   * Verifies that the home page is ready for interaction.
   */
  public async expectLoaded(): Promise<void> {
    await expect(this.getStartedLink()).toBeVisible();
  }

  /**
   * Clicks the Get started call to action.
   */
  public async clickGetStarted(): Promise<void> {
    await this.getStartedLink().click();
  }

  private getStartedLink() {
    return this.page.getByRole('link', { name: 'Get started' });
  }
}
