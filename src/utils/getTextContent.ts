import type { Page } from 'playwright';

export const getTextContent = async(page: Page, selector: string): Promise<string[]> => {
  await page.waitForSelector(selector);

  const textContent = await page.$$eval(selector, (els) => els.map((el) => el.textContent)) as string[];

  if(!textContent) {
    throw new Error('textContent is null');
  }

  return textContent;
};
