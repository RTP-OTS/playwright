import { test, expect } from '@playwright/test';

test('To do list', async ({ page }) => {
    await page.goto('https://rtp-ots.github.io/todolist/examples/react/dist/');
    await page.getByTestId('text-input').fill('write a blogs')
    await page.getByTestId('text-input').press('Enter')
    await page.getByTestId('todo-item-toggle').click()
    await expect(page.getByTestId('todo-item-label')).toBeVisible();
});
