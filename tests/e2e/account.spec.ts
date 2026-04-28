// path: tests/e2e/account.spec.ts
import type { Page } from '@playwright/test';

import { HeaderComponent } from '../../src/components/HeaderComponent';
import type { AccountInformationPage } from '../../src/pages/AccountInformationPage';
import type { AccountStatusPage } from '../../src/pages/AccountStatusPage';
import type { HomePage } from '../../src/pages/HomePage';
import type { SignupLoginPage } from '../../src/pages/SignupLoginPage';

import { test } from '../../src/fixtures/baseTest';
import { buildSignupAccount } from '../../src/test-data/accountData';

type AccountFixtures = {
  accountInformationPage: AccountInformationPage;
  accountStatusPage: AccountStatusPage;
  homePage: HomePage;
  page: Page;
  signupLoginPage: SignupLoginPage;
};

/**
 * Covers account signup lifecycle flow.
 */
test.describe('Account signup', () => {
  /**
   * Verifies that the user can create and delete an account.
   */
  test('should create and delete account', async ({
    accountInformationPage,
    accountStatusPage,
    homePage,
    page,
    signupLoginPage
  }: AccountFixtures) => {
    const account = buildSignupAccount();
    const headerComponent = new HeaderComponent(page);

    await homePage.open();
    await homePage.expectLoaded();
    await headerComponent.openSignupLogin();
    await signupLoginPage.expectNewUserSignupVisible();
    await signupLoginPage.signUp(account.name, account.email);
    await accountInformationPage.expectLoaded();
    await accountInformationPage.fillAccountInformation(account);
    await accountInformationPage.createAccount();
    await accountStatusPage.expectAccountCreated();
    await accountStatusPage.continue();
    await headerComponent.expectLoggedInAs(account.name);
    await headerComponent.openDeleteAccount();
    await accountStatusPage.expectAccountDeleted();
    await accountStatusPage.continue();
  });
});