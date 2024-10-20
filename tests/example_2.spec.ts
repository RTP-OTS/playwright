// import { test, expect } from '@playwright/test';

// test('User Registration without POM', async ({ page }) => {
//   await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
//   await page.locator('#gender-male').click();
//   await page.locator('#FirstName').fill('Jack');
//   await page.locator('#LastName').fill('Room');
//   await page.locator('select[name="DateOfBirthDay"]').selectOption('5');
//   await page.locator('select[name="DateOfBirthMonth"]').selectOption('December');
//   await page.locator('select[name="DateOfBirthYear"]').selectOption('1991');
//   await page.locator('#Email').fill('Jackroom@test.com');
//   await page.locator('#Company').fill('Test Corp');
//   const isNewsletterChecked = await page.locator('#Newsletter').isChecked();
//   if (!isNewsletterChecked) {
//     await page.locator('#Newsletter').click();
//   }
//   await page.locator('#Password').fill('abcPassword1234');
//   await page.locator('#ConfirmPassword').fill('abcPassword1234');
//   await page.locator('#register-button').click();
// });
