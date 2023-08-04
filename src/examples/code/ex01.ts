import { initBrowser, initPage, navigateTo, autoScroll, autoClick, autoType, getTextContent, getURL } from '../../utils';

(async() => {
  const url = 'https://media.naver.com/journalist/448/45293';

  const browser = await initBrowser(false);

  const page = await initPage(browser);

  await navigateTo(page, url);

  await autoScroll(page, 3);
  // const contents = await getTextContent(page, '.press_edit_news_title');
  const urlResult = await getURL(page, '#ct > div > div > section.journalist_main > div > div.journalist_article > div.r_home_wrp > div > div.press_edit_news._CURATION_CARD._journalist_more_view._persist_wrap > div > ul:nth-child(2) > li:nth-child(1) > a');
  console.log(urlResult);
})();
