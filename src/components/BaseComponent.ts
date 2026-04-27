// path: src/components/BaseComponent.ts
import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

/**
 * Provides shared behavior for reusable page components.
 */
export abstract class BaseComponent {
  /**
   * Creates a reusable page component bound to the current page.
   *
   * @param page The current Playwright page instance.
   */
  public constructor(protected readonly page: Page) {}

  /**
   * Verifies that a component root element is visible.
   *
   * @param root The component root locator.
   */
  public async expectVisible(root: Locator): Promise<void> {
    await expect(root).toBeVisible();
  }
}
