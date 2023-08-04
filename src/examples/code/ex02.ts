import { initBrowser, initPage, navigateTo, getTextContent } from "../../utils";

(async() => {
  const browser = await initBrowser(true);
  const page = await initPage(browser);

  await navigateTo(page, 'https://github.com/lebrancconvas/Web-Automation-Utilities');
  const textContent = await getTextContent(page, '#ct > div > div > section.journalist_main > div > div.journalist_article > div.r_home_wrp > div > div.press_edit_news._CURATION_CARD._journalist_more_view._persist_wrap > div > ul:nth-child(2) > li:nth-child(1) > a');
  console.log(textContent);
})();
