
const { test, expect } = require('@playwright/test');

test('Facebook sign-up form - QA test', async ({ page }) => {

    // 1. Open the registration page
    await page.goto('https://www.facebook.com/reg/');

    await page.waitForLoadState('domcontentloaded');

    // 2. Locate fields using their labels
    const firstName = page.getByLabel('First name', {
        exact: true
    });

    const surname = page.getByLabel('Surname', {
        exact: true
    });

    const email = page.getByLabel(
        'Mobile number or email address',
        { exact: true }
    );

    const password = page.getByLabel('Password', {
        exact: true
    });

    // 3. Verify the fields exist
    await expect(firstName).toBeVisible();
    await expect(surname).toBeVisible();
    await expect(email.first()).toBeVisible();
    await expect(password.first()).toBeVisible();

    console.log('Registration fields located successfully.');

    // 4. Fill the name fields
    await firstName.fill('Test');
    await surname.fill('User');

    // 5. Verify the name fields
    await expect(firstName).toHaveValue('Test');
    await expect(surname).toHaveValue('User');

    // 6. Capture QA evidence
    await page.screenshot({
        path: 'facebook-signup-form.png',
        fullPage: true
    });

    console.log('Name fields filled and verified successfully.');

});
