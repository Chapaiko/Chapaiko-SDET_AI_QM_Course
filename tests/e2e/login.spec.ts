// path: tests/e2e/login.spec.ts
import type { Page } from '@playwright/test';

import { HeaderComponent } from '../../src/components/HeaderComponent';
import type { AccountInformationPage } from '../../src/pages/AccountInformationPage';
import type { AccountStatusPage } from '../../src/pages/AccountStatusPage';
import type { HomePage } from '../../src/pages/HomePage';
import type { SignupLoginPage } from '../../src/pages/SignupLoginPage';
import type { SignupAccount } from '../../src/test-data/accountData';

import { test } from '../../src/fixtures/baseTest';
import { buildSignupAccount } from '../../src/test-data/accountData';

type LoginFixtures = {
  accountInformationPage: AccountInformationPage;
  accountStatusPage: AccountStatusPage;
  homePage: HomePage;
  page: Page;
  signupLoginPage: SignupLoginPage;
};

/**
 * Covers login flow for an existing account.
 */
test.describe('Login page', () => {
  /**
   * Verifies that the user can log in with valid credentials and delete the account.
   */
  test('should login with valid credentials and delete account', async ({
    accountInformationPage,
    accountStatusPage,
    homePage,
    page,
    signupLoginPage
  }: LoginFixtures) => {
    const account = buildSignupAccount();
    const headerComponent = new HeaderComponent(page);

    await createAccount(account, {
      accountInformationPage,
      accountStatusPage,
      homePage,
      page,
      signupLoginPage
    });

    await homePage.open();
    await homePage.expectLoaded();
    await headerComponent.openSignupLogin();
    await signupLoginPage.expectLoginToYourAccountVisible();
    await signupLoginPage.login(account.email, account.password);
    await headerComponent.expectLoggedInAs(account.name);
    await headerComponent.openDeleteAccount();
    await accountStatusPage.expectAccountDeleted();
    await accountStatusPage.continue();
  });
});

async function createAccount(
  account: SignupAccount,
  {
    accountInformationPage,
    accountStatusPage,
    homePage,
    page,
    signupLoginPage
  }: LoginFixtures
): Promise<void> {
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
  await page.context().clearCookies();
}