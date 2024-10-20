import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    private page: Page;
    private checkboxMaleGender: Locator;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private birthDaySelect: Locator;
    private birthMonthSelect: Locator;
    private birthYearSelect: Locator;
    private emailInput: Locator;
    private companyInput: Locator;
    private newsletterCheckbox: Locator;
    private passwordInput: Locator;
    private confirmPasswordInput: Locator;
    private registerButton: Locator;
    private continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkboxMaleGender = page.locator('#gender-male');
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.birthDaySelect = page.locator('select[name="DateOfBirthDay"]');
        this.birthMonthSelect = page.locator('select[name="DateOfBirthMonth"]');
        this.birthYearSelect = page.locator('select[name="DateOfBirthYear"]');
        this.emailInput = page.locator('#Email');
        this.companyInput = page.locator('#Company');
        this.newsletterCheckbox = page.locator('#Newsletter');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async goToRegisterPage() {
        await this.page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    }

    async selectGender() {
        await this.checkboxMaleGender.click();
    }

    async inputFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async inputLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async selectBirthDay(birthDay: string) {
        await this.birthDaySelect.selectOption(birthDay);
    }

    async selectBirthMonth(birthMonth: string) {
        await this.birthMonthSelect.selectOption(birthMonth);
    }

    async selectBirthYear(birthYear: string) {
        await this.birthYearSelect.selectOption(birthYear);
    }

    async inputEmail(email: string) {    
        await this.emailInput.fill(email);
    }

    async inputCompany(company: string) {
        await this.companyInput.fill(company);
    }

    async toggleNewsletterSubscription() {
        const isNewsletterChecked = await this.newsletterCheckbox.isChecked();
        if (!isNewsletterChecked) {
            await this.newsletterCheckbox.click();
        }
    }

    async inputPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async inputConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    async clickRegister() {
        await this.registerButton.click();
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async fillRegistrationForm(user) {
        await this.selectGender(); 
        await this.inputFirstName(user.firstName); 
        await this.inputLastName(user.lastName);
        await this.selectBirthDay(user.birthDay); 
        await this.selectBirthMonth(user.birthMonth);
        await this.selectBirthYear(user.birthYear);
        await this.inputEmail(user.email); 
        await this.inputCompany(user.company);
        await this.toggleNewsletterSubscription();
        await this.inputPassword(user.password);
        await this.inputConfirmPassword(user.confirmPassword);
        await this.clickRegister();
    }
    
}
