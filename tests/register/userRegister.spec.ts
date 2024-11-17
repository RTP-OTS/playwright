import { test, expect } from '@playwright/test';

test('To verify should register a new user successfully', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#gender-male').click();
    await page.locator('#FirstName').fill('New');
    await page.locator('#LastName').fill('Jeans');
    await page.locator('select[name="DateOfBirthDay"]').selectOption('12');
    await page.locator('select[name="DateOfBirthMonth"]').selectOption('12');
    await page.locator('select[name="DateOfBirthYear"]').selectOption('2000');
    await page.locator('#Email').fill('newjeans@gmail.com');
    await page.locator('#Company').fill('Test Corp');
    await page.locator('#Newsletter').click();
    await page.locator('#Password').fill('abcPassword1234');
    await page.locator('#ConfirmPassword').fill('abcPassword1234');
    const registerButton = page.locator('#register-button');
    await expect(registerButton).toBeDisabled();
    await registerButton.click();
});
