import { test, expect } from "../fixtures/page/pageFixtures";
import * as testData from "../testData/testData.json";

let user: any;

test.describe("User Registration Tests", () => {
  test.beforeAll(async () => {
    user = testData.userRegistration;
  });

  test("To verify should register a new user successfully", async ({ registerPage }) => {
    await test.step("Navigate to the registration page", async () => {
      await registerPage.goToRegisterPage();
    });

    await test.step("Fill in the registration form", async () => {
      await registerPage.selectGender();
      await registerPage.inputFirstName(user.firstName);
      await registerPage.inputLastName(user.lastName);
      await registerPage.selectBirthDay(user.birthDay);
      await registerPage.selectBirthMonth(user.birthMonth);
      await registerPage.selectBirthYear(user.birthYear);
      await registerPage.inputEmail(user.email);
      await registerPage.inputCompany(user.company);
      await registerPage.toggleNewsletterSubscription();
      await registerPage.inputPassword(user.password);
      await registerPage.inputConfirmPassword(user.confirmPassword);
    });

    await test.step("Verify and Submit the registration form", async () => {
      await registerPage.verifyRegisterButton();
      await registerPage.clickRegister();
    });
  });
});
