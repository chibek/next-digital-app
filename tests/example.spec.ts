import { test, expect } from '@playwright/test';

test('Validate Home page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
});

test('Validate user list', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const links = await page.getByRole('link').all();
  await expect(links.length).toBeGreaterThanOrEqual(1);
});
