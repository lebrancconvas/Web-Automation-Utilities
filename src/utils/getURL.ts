import type { Page } from 'playwright';

export const getURL = async(page: Page, selector: string): Promise<string> => {
  await page.waitForSelector(selector);
  const url = await page.$eval(selector, (el) => el.getAttribute('href'));
  if(!url) {
    throw new Error('URL not found');
  }
  return url;
}
