import { test , expect } from '../fixtures/page/pageFixtures'

test.describe('User Registration Tests', () => {
  test('should register a new user successfully', async ({ registerPage }) => {
    await registerPage.goToRegisterPage();
    await registerPage.selectGender(); 
    await registerPage.inputFirstName('Jack'); 
    await registerPage.inputLastName('Room');
    await registerPage.selectBirthDay('5'); 
    await registerPage.selectBirthMonth('December');
    await registerPage.selectBirthYear('1991');
    await registerPage.inputEmail('Jackroom@test.com'); 
    await registerPage.inputCompany('Test Corp');
    await registerPage.toggleNewsletterSubscription();
    await registerPage.inputPassword('abcPassword1234');
    await registerPage.inputConfirmPassword('abcPassword1234');
    await registerPage.clickRegister();
  });
});
