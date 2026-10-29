
const { test, expect } = require('@playwright/test');



test('User can log in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/inventory.html/);
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

  // Keep the browser open for 15 seconds at the end
  await page.waitForTimeout(15000);
});
