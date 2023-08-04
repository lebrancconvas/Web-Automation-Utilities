import type { Page } from 'playwright';

export const autoScroll = async(page: Page, iteration: number, timeout?: number): Promise<void> => {
  const scrollY = await page.evaluate(() => document.documentElement.scrollHeight);
  let timeoutSetting = 1000;

  if(typeof timeout === 'number') {
    timeoutSetting = timeout;
  }

  for(let i = 1; i <= iteration; i++) {
    console.log(`Iteration: ${i} / ${iteration}`);
    await page.mouse.wheel(0, scrollY * i);
    await page.waitForTimeout(timeoutSetting);
  }
}
