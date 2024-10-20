// import { test, expect } from '@playwright/test';
// import { RegisterPage } from '../pageObjects/RegisterPage';

// test.describe('User Registration Tests', () => {
//   test('should register a new user successfully', async ({ page }) => {
//     const registerPage = new RegisterPage(page);
//     await registerPage.goToRegisterPage();
//     await registerPage.selectGender();
//     await registerPage.inputFirstName('John');
//     await registerPage.inputLastName('Doe');
//     await registerPage.selectBirthDay('1');
//     await registerPage.selectBirthMonth('January');
//     await registerPage.selectBirthYear('1990');
//     await registerPage.inputEmail('johndoe@example.com');
//     await registerPage.inputCompany('Example Corp');
//     await registerPage.toggleNewsletterSubscription();
//     await registerPage.inputPassword('StrongPassword123');
//     await registerPage.inputConfirmPassword('StrongPassword123');
//     await registerPage.clickRegister();
//     await registerPage.verifyRegistrationSuccess();  
//     await registerPage.clickContinue(); 
//   });
// });
