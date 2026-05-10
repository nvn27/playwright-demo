// @ts-check
import { test, expect } from '@playwright/test';

const GooglePO = require('./page-objects/google-po.js');

test('has title', async ({ page }) => {
    await page.goto('https://www.google.com');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Google');

    const title = await page.title();
    console.log(`Page title: ${title}`);

    const url = page.url();
    console.log(`Page URL: ${url}`);

    // const text = await page.locator("//input[@role='button']").last().getAttribute('value');
    const googlePO = new GooglePO(page);
    const text = await googlePO.getSearchBtnText();
    console.log(`Extracted text: ${text}`);

    await page.waitForTimeout(2000);

    // Failure Step
    // expect(text).toBe('ABC');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
