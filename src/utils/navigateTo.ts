import type { Page } from 'playwright';

export const navigateTo = async(page: Page, url: string): Promise<void> => {
  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
}
