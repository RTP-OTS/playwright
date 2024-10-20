import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private firstNameInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.firstNameInput = page.locator('#FirstName');
    }

    async goToLoginPage() {
        await this.page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F');
    }

    async inputEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async inputPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.getByRole('link', { name: 'My account' }).first().click(),
        ]);
    }

    async editFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }
}
