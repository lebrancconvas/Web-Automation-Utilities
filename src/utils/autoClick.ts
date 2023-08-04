import type { Page } from 'playwright';

export const autoClick = async(page: Page, selector: string): Promise<void> => {
  await page.waitForSelector(selector);
  await page.locator(selector).click();
};
