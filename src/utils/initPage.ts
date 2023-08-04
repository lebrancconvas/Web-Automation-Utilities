import type { Browser, Page } from 'playwright';
import { BrowserConfig } from '../configs';

export const initPage = async(browser: Browser, baseURL?: string, userAgent?: string, locale?: string): Promise<Page> => {
  const context = await browser.newContext({
    userAgent: BrowserConfig.userAgent || userAgent,
    locale: BrowserConfig.locale || locale,
    baseURL: BrowserConfig.baseURL || baseURL
  });

  const page = await context.newPage();

  return page;
}
