import type { Page } from 'playwright';

export const autoType = async(page: Page, selector: string, content: string): Promise<void> => {
  await page.waitForSelector(selector);
  await page.locator(selector).type(content);
};
