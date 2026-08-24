import { test, expect } from '@playwright/test';

test('static site loads its design system and photo interactions', async ({ page }, testInfo) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto('/');
  await expect(page).toHaveTitle('Kite Session — Farø · May 30 2026 · Poster Picks');
  await expect(page.locator('link[rel="stylesheet"][href="assets/site.css"]')).toHaveCount(1);
  await expect(page.locator('script[src="assets/site.js"][defer]')).toHaveCount(1);

  const images = page.locator('.pick-image img');
  const imageLinks = page.locator('.pick-image a');
  await expect(images).toHaveCount(10);
  await expect(imageLinks).toHaveCount(10);

  for (let index = 0; index < await imageLinks.count(); index += 1) {
    const link = imageLinks.nth(index);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(link).toHaveAttribute('href', /assets\/images\//);
  }

  await expect(page.locator('.page')).toBeVisible();
  expect(consoleErrors).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath('site.png'), fullPage: false });
});
