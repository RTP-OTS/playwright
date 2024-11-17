import { Page, Locator, test , expect } from '@playwright/test';

export class RegisterPage {
  protected page: Page;
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
    this.checkboxMaleGender = page.locator("#gender-male");
    this.firstNameInput = page.locator("#FirstName");
    this.lastNameInput = page.locator("#LastName");
    this.birthDaySelect = page.locator('select[name="DateOfBirthDay"]');
    this.birthMonthSelect = page.locator('select[name="DateOfBirthMonth"]');
    this.birthYearSelect = page.locator('select[name="DateOfBirthYear"]');
    this.emailInput = page.locator("#Email");
    this.companyInput = page.locator("#Company");
    this.newsletterCheckbox = page.locator("#Newsletter");
    this.passwordInput = page.locator("#Password");
    this.confirmPasswordInput = page.locator("#ConfirmPassword");
    this.registerButton = page.locator("#register");
    this.continueButton = page.getByRole("button", { name: "Continue" });
  }

  public getPage(): Page {
    return this.page;
  }

  async goToRegisterPage() {
    await test.step("Navigate to the registration page", async () => {
      await this.page.goto(
        "https://demo.nopcommerce.com/register?returnUrl=%2F"
      );
    });
  }

  async selectGender() {
    await test.step("Select male gender", async () => {
      await this.checkboxMaleGender.click();
    });
  }

  async inputFirstName(firstName: string) {
    await test.step(`Enter first name: ${firstName}`, async () => {
      await this.firstNameInput.fill(firstName);
    });
  }

  async inputLastName(lastName: string) {
    await test.step(`Enter last name: ${lastName}`, async () => {
      await this.lastNameInput.fill(lastName);
    });
  }

  async selectBirthDay(birthDay: string) {
    await test.step(`Select birth day: ${birthDay}`, async () => {
      await this.birthDaySelect.selectOption(birthDay);
    });
  }

  async selectBirthMonth(birthMonth: string) {
    await test.step(`Select birth month: ${birthMonth}`, async () => {
      await this.birthMonthSelect.selectOption(birthMonth);
    });
  }

  async selectBirthYear(birthYear: string) {
    await test.step(`Select birth year: ${birthYear}`, async () => {
      await this.birthYearSelect.selectOption(birthYear);
    });
  }

  async inputEmail(email: string) {
    await test.step(`Enter email: ${email}`, async () => {
      await this.emailInput.fill(email);
    });
  }

  async inputCompany(company: string) {
    await test.step(`Enter company: ${company}`, async () => {
      await this.companyInput.fill(company);
    });
  }

  async toggleNewsletterSubscription() {
    await test.step("Toggle newsletter subscription", async () => {
      const isNewsletterChecked = await this.newsletterCheckbox.isChecked();
      if (!isNewsletterChecked) {
        await this.newsletterCheckbox.click();
      }
    });
  }

  async inputPassword(password: string) {
    await test.step("Enter password", async () => {
      await this.passwordInput.fill(password);
    });
  }

  async inputConfirmPassword(confirmPassword: string) {
    await test.step("Enter confirm password", async () => {
      await this.confirmPasswordInput.fill(confirmPassword);
    });
  }

  async clickRegister() {
    await test.step("Click on the register button", async () => {
      await this.registerButton.click({ timeout:500});
    });
  }

  async verifyRegisterButton() {
    await test.step("Verify on the register button", async () =>{
      await expect(this.registerButton).toBeDisabled();
    });
}

  async clickContinue() {
    await test.step("Click on the continue button", async () => {
      await this.continueButton.click();
    });
  }

  async fillRegistrationForm(user) {
    await test.step("Fill the registration form", async () => {
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
    });
  }
}
