import type { Page } from 'playwright';

export const fullScroll = async(page: Page, iteration: number): Promise<void> => {
  const scrollY = await page.evaluate(() => document.documentElement.scrollHeight);

  for(let i = 1; i <= iteration; i++) {
    console.log(`Iteration: ${i} / ${iteration}`);
    await page.mouse.wheel(0, scrollY * i);
    await page.waitForTimeout(1000);
  }
}
