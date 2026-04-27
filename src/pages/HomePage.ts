// path: src/pages/HomePage.ts
import { expect, type Locator } from '@playwright/test';

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
    await this.acceptConsentIfVisible();
  }

  /**
   * Verifies that the home page is ready for interaction.
   */
  public async expectLoaded(): Promise<void> {
    await expect(this.siteHeading()).toBeVisible();
    await expect(this.homeLink()).toBeVisible();
    await expect(this.productsLink()).toBeVisible();
    await expect(this.heroBannerHeading()).toBeVisible();
    await expect(this.featuredItemsHeading()).toBeVisible();
  }

  private async acceptConsentIfVisible(): Promise<void> {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });

    if (await consentButton.isVisible().catch(() => false)) {
      await consentButton.click();
    }
  }

  private siteHeading(): Locator {
    return this.page.getByRole('heading', { name: 'AutomationExercise', exact: true }).first();
  }

  private heroBannerHeading(): Locator {
    return this.page.getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers'
    });
  }

  private featuredItemsHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Features Items' });
  }

  private homeLink(): Locator {
    return this.page.getByRole('link', { name: 'Home' });
  }

  private productsLink(): Locator {
    return this.page.getByRole('link', { name: 'Products' });
  }
}
