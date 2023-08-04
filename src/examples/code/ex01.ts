import { chromium } from 'playwright';
import { BrowserConfig } from '../../configs';
import { initBrowser, initPage, navigateTo, fullScroll, autoClick, autoType, getTextContent } from '../../utils';

(async() => {
  const url = 'https://media.naver.com/journalist/448/45293';

  const browser = await initBrowser(false);

  const page = await initPage(browser);

  await navigateTo(page, url);

  await fullScroll(page, 3);
  const contents = await getTextContent(page, '.press_edit_news_title');
  console.log(contents);
})();
