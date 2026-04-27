// path: src/pages/BasePage.ts
import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

import { Logger } from '../utils/logger';

/**
 * Provides common navigation and synchronization behavior for page objects.
 */
export abstract class BasePage {
  public constructor(protected readonly page: Page) {}

  /**
   * Navigates to a route relative to the configured base URL.
   *
   * @param route The route to open.
   */
  public async goto(route: string): Promise<void> {
    Logger.info('Navigating to route', { route });
    await this.page.goto(route);
  }

  /**
   * Waits until the current URL matches the expected value.
   *
   * @param url The expected URL or URL pattern.
   */
  public async expectUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}
