import { chromium } from 'playwright';
import type { Browser } from 'playwright';

export const initBrowser = async(isHeadless: boolean): Promise<Browser> => {
  const browser = await chromium.launch({
    headless: isHeadless
  });

  return browser;
};
