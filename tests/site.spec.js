import { test, expect } from '@playwright/test';

test('static site loads its design system and photo interactions', async ({ page }, testInfo) => {
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto('./');
  await expect(page).toHaveTitle('Kite Session — Farø · May 30 2026 · Poster Picks');
  await expect(page.locator('link[rel="stylesheet"], head style[data-vite-dev-id]')).not.toHaveCount(0);
  await expect(page.locator('script[type="module"]')).not.toHaveCount(0);
  await expect(page.locator('main.page')).toHaveCount(1);
  await expect(page.locator('main.page > header')).toHaveCount(1);
  await expect(page.locator('section.intro[aria-labelledby="intro-title"]')).toHaveCount(1);
  await expect(page.locator('section.picks[aria-labelledby="selection-title"]')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('h2')).toHaveCount(12);

  const images = page.locator('.pick-image img');
  const imageLinks = page.locator('.pick-image a');
  const articles = page.locator('article.pick');
  await expect(images).toHaveCount(10);
  await expect(imageLinks).toHaveCount(10);
  await expect(articles).toHaveCount(10);
  await expect(page.locator('figure.pick-image')).toHaveCount(10);
  await expect(page.locator('figcaption.filename')).toHaveCount(10);

  for (let index = 0; index < await imageLinks.count(); index += 1) {
    const link = imageLinks.nth(index);
    const image = images.nth(index);
    const article = articles.nth(index);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(link).toHaveAttribute('aria-label', /^Open full-size image:/);
    await expect(link).toHaveAttribute('href', /assets\/images\//);
    await expect(image).toHaveAttribute('alt', /\S/);
    await expect(article.locator('h2')).toHaveCount(1);
    await expect(article.locator('figure')).toHaveCount(1);
  }

  await expect(page.locator('.page')).toBeVisible();
  expect(consoleErrors).toEqual([]);
  await page.screenshot({ path: testInfo.outputPath('site.png'), fullPage: false });

  await page.keyboard.press('Tab');
  await expect(imageLinks.first()).toBeFocused();
  await expect(imageLinks.first()).toHaveCSS('outline-style', 'solid');
});

test('site respects reduced motion preferences', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  const transitionDuration = await page.locator('.pick-image img').first().evaluate((image) => {
    return parseFloat(getComputedStyle(image).transitionDuration);
  });
  expect(transitionDuration).toBeLessThan(0.001);
});
