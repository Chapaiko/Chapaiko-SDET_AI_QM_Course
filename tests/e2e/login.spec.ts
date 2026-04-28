import type { Page } from '@playwright/test';

import type { SignupAccount } from '../../src/test-data/accountData';

import type { AppFixtures } from '../../src/fixtures/baseTest';

import { test } from '../../src/fixtures/baseTest';
import { buildSignupAccount } from '../../src/test-data/accountData';

type LoginFixtures = Pick<
  AppFixtures,
  'accountInformationPage' | 'accountStatusPage' | 'headerComponent' | 'homePage' | 'signupLoginPage'
> & {
  page: Page;
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
    headerComponent,
    homePage,
    page,
    signupLoginPage
  }: LoginFixtures) => {
    const account = buildSignupAccount();

    await createAccount(account, {
      accountInformationPage,
      accountStatusPage,
      headerComponent,
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
    headerComponent,
    homePage,
    page,
    signupLoginPage
  }: LoginFixtures
): Promise<void> {
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