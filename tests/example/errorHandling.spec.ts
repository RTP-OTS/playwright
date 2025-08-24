import { test, expect, Page } from "@playwright/test";

// Constants
const API_ENDPOINTS = {
  login: 'http://localhost:5500/auth/login'
};

const TEST_DATA = {
  username: 'admin',
  password: 'Password123',
  errorResponse: {
    code: 'X006',
    message: 'An unexpected error occurred'
  }
};

const SELECTORS = {
  username: 'username',
  password: 'password',
  loginButton: 'Login',
  errorModal: 'modal',
  closeModalButton: 'close-modal'
};

// Helper functions
async function mockLoginError(page: Page) {
  await page.route(API_ENDPOINTS.login, route => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify(TEST_DATA.errorResponse),
    });
  });
}

async function fillLoginForm(page: Page) {
  await page.getByTestId(SELECTORS.username).fill(TEST_DATA.username);
  await page.getByTestId(SELECTORS.password).fill(TEST_DATA.password);
  await page.getByRole('button', { name: SELECTORS.loginButton }).click();
}

async function verifyErrorModal(page: Page) {
  const errorModal = page.getByTestId(SELECTORS.errorModal);
  await expect(errorModal).toBeVisible();
  await page.getByTestId(SELECTORS.closeModalButton).click();
  await expect(errorModal).toBeHidden();
}

test("Verify that the system handles HTTP 500 error", async ({ page }) => {
  // Setup: Mock API error response
  await mockLoginError(page);
  
  // Action: Navigate and attempt login
  await page.goto("/login");
  await fillLoginForm(page);
  
  // Assertions: Verify error handling
  await expect(page).toHaveURL('/login');
  await verifyErrorModal(page);
});

test("Login and verify dashboard access on Sauce Demo", async ({ page }) => {
  // Navigate to Sauce Demo login page
  await page.goto("https://www.saucedemo.com");

  // Enter valid credentials
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");

  // Click the login button
  await page.click("#login-button");

  // Verify successful login by checking for dashboard elements
  const inventoryContainer = await page.locator(".inventory_container");
  await expect(inventoryContainer).toBeVisible();
});
