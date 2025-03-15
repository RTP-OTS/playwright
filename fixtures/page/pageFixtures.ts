import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../../pageObjects/LoginPage';
import { RegisterPage } from '../../pageObjects/RegisterPage_testStep';
// import { RegisterPage } from '../../pageObjects/RegisterPage';

type MyFixtures = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page as Page);
    await use(loginPage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page as Page);
    await use(registerPage);
  },
  
});

export { expect } from '@playwright/test';
