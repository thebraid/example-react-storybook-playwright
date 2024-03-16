import { test, expect } from '@playwright/test';

test('app screenshot', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?args=&id=example-app--base&viewMode=story');

  const element = await page.$('.App');

  expect(await element?.screenshot({})).toMatchSnapshot('screenshot.png');
});
