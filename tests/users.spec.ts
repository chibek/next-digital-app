import { test, expect } from '@playwright/test';

test('Validate Home page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();
});

test('Validate user list', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(await page.getByRole('link').count()).toBeGreaterThanOrEqual(1);
  await page.getByRole('link',{name: "Leanne Graham"}).click();
  await page.waitForURL('**/users/**');
  expect(await page.getByText("username: Bret").count()).toBeGreaterThanOrEqual(1); 
});
