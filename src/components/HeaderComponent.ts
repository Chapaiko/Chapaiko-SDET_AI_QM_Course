// path: src/components/HeaderComponent.ts
import { expect } from '@playwright/test';

import { BaseComponent } from './BaseComponent';

/**
 * Models the primary site header navigation.
 */
export class HeaderComponent extends BaseComponent {
  /**
   * Verifies that the Docs navigation link is visible.
   */
  public async expectDocsLinkVisible(): Promise<void> {
    await this.expectVisible(this.docsLink());
  }

  /**
   * Clicks the Docs navigation link.
   */
  public async clickDocs(): Promise<void> {
    await this.docsLink().click();
  }

  /**
   * Verifies that the browser navigated to the documentation area.
   */
  public async expectDocsPageOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/\/docs\//);
  }

  private docsLink() {
    return this.page.getByRole('link', { name: 'Docs' });
  }
}
