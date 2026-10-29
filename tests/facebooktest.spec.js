
const { test, expect } = require('@playwright/test');

test('Facebook sign-up form - QA test', async ({ page }) => {

    // 1. Open Facebook sign-up page
    await page.goto('https://www.facebook.com/reg/');

    // 2. Locate form fields
    const firstName = page.getByLabel('First name', { exact: true });
    const surname = page.getByLabel('Surname', { exact: true });
    const email = page.getByLabel(
        'Mobile number or email address',
        { exact: true }
    );
    const password = page.getByLabel('Password', { exact: true });

    // 3. Locate Date of Birth dropdowns
    const birthDay = page.getByRole('combobox', { name: ' day' });
    const birthMonth = page.getByRole('combobox', { name: ' month' });
    const birthYear = page.getByRole('combobox', { name: ' year' });

    // 4. Verify fields are visible
    await expect(firstName).toBeVisible();
    
    await expect(surname).toBeVisible();
    await expect(email.first()).toBeVisible();
    await expect(password.first()).toBeVisible();
    await expect(birthDay).toBeVisible();
    await expect(birthMonth).toBeVisible();
    await expect(birthYear).toBeVisible();

    // 5. Fill in name fields
    await firstName.fill('Test');
    await surname.fill('User');

    // 6. Select date of birth

    await birthDay.click();
    await page.getByRole('option', {
        name: '15',
        exact: true
    }).click();
await email.fill('your_test_email@example.com');
await password.fill('YourTestPassword123!');
    await birthMonth.click();
    await page.getByRole('option', {
        name: 'June',
        exact: true
    }).click();

    await birthYear.click();
    await page.getByRole('option', {
        name: '1995',
        exact: true
    }).click();

    // 7. Select gender
 const gender = page.getByRole('combobox').filter({
    hasText: 'Select your gender'
});

await expect(gender).toBeVisible();
await gender.click();

await page.getByRole('option', {
    name: 'Male',
    exact: true
}).click();

    // 8. Verify entered values
    await expect(firstName).toHaveValue('Test');
    await expect(surname).toHaveValue('User');

    await expect(birthDay).toContainText('15');
    await expect(birthMonth).toContainText('June');
    await expect(birthYear).toContainText('1995');

    // 9. Capture screenshot evidence
    await page.screenshot({
        path: 'facebook-signup-form.png',
        fullPage: true
    });

    console.log('Name, DOB, and gender selection steps completed.');
    console.log(await page.getByText('Select your gender', { exact: true }).count());
console.log(await page.getByRole('combobox').allTextContents());
});
