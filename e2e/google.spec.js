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
    expect(text).toBe('ABC');
});
