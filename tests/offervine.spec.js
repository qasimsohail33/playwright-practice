
const { test, expect } = require('@playwright/test');
test("User account created successfully", async ({ page }) => {
    await page.goto("https://www.facebook.com/reg/?entry_point=login&next=https%3A%2F%2Fwww.facebook.com%2F");

     await page.waitForTimeout(3000);
     
     });