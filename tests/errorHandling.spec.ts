import { test, expect } from "@playwright/test";

test("Verify that the system handles errors http 500", async ({ page }) => {

  await page.route('http://localhost:5500/auth/login', route => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({"code":"X006","message":"An unexpected error occurred."}),
    });
  });

  await page.goto("/login");
  await page.getByTestId('username').fill('admin');
  await page.getByTestId('password').fill('Password123');
  await page.getByRole('button', {name:'Login'}).click();

  const errorModal = await page.getByTestId('modal')
  await expect(errorModal).toBeVisible();
  await page.getByTestId('close-modal').click();
  await expect(errorModal).toBeHidden();

});
