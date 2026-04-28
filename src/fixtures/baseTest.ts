// path: src/fixtures/baseTest.ts
import { test as base, expect, type Page, type TestInfo } from '@playwright/test';

import { HeaderComponent } from '../components/HeaderComponent';
import { AccountInformationPage } from '../pages/AccountInformationPage';
import { AccountStatusPage } from '../pages/AccountStatusPage';
import { CartPage } from '../pages/CartPage';
import { CategoryProductsPage } from '../pages/CategoryProductsPage';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { SignupLoginPage } from '../pages/SignupLoginPage';
import { Logger } from '../utils/logger';

export type AppFixtures = {
  accountInformationPage: AccountInformationPage;
  accountStatusPage: AccountStatusPage;
  cartPage: CartPage;
  categoryProductsPage: CategoryProductsPage;
  headerComponent: HeaderComponent;
  homePage: HomePage;
  productsPage: ProductsPage;
  signupLoginPage: SignupLoginPage;
};

export const test = base.extend<AppFixtures>({
  accountInformationPage: async ({ page }, use) => {
    await use(new AccountInformationPage(page));
  },
  accountStatusPage: async ({ page }, use) => {
    await use(new AccountStatusPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  categoryProductsPage: async ({ page }, use) => {
    await use(new CategoryProductsPage(page));
  },
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  signupLoginPage: async ({ page }, use) => {
    await use(new SignupLoginPage(page));
  }
});

export { expect };

/**
 * Registers common setup and teardown hooks for Playwright tests.
 */
export class BaseTest {
  /**
   * Registers shared lifecycle hooks for all tests using the custom fixture.
   */
  public static registerHooks(): void {
    test.beforeEach(async ({ page }, testInfo) => {
      await this.setup(page, testInfo);
    });

    test.afterEach(({ page }, testInfo) => {
      this.teardown(page, testInfo);
    });
  }

  /**
   * Performs common test setup.
   *
   * @param testPage The current Playwright page.
   * @param testInfo The current test metadata.
   */
  public static async setup(testPage: Page, testInfo: TestInfo): Promise<void> {
    Logger.info('Starting test', { title: testInfo.title });
    await testPage.context().clearCookies();
  }

  /**
   * Performs common test teardown.
   *
   * @param testPage The current Playwright page.
   * @param testInfo The current test metadata.
   */
  public static teardown(testPage: Page, testInfo: TestInfo): void {
    Logger.info('Finished test', {
      title: testInfo.title,
      status: testInfo.status,
      url: testPage.url()
    });
  }
}

BaseTest.registerHooks();
