import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work Navigation Test', () => {
  test('should navigate to Client Work page and verify visibility of text', async ({ page }) => {
    // Step 1: Navigate to EPAM homepage
    await page.goto('https://www.epam.com/');

    // Step 2: Click on "Services" from header menu
    await page.getByRole('link', { name: 'Services' }).click();

    // Step 3: Click on "Explore Our Client Work" link
    await page.getByText('Explore Our Client Work').click();

    // Step 4: Verify that "Client Work" text is visible on the page
    await expect(page.locator('text="Client Work"')).toBeVisible();
  });
});