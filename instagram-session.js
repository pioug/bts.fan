const fs = require("fs");
const puppeteer = require("puppeteer");

// https://www.browserless.io/blog/2022/05/13/manage-sessions/
// "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9222
// http://127.0.0.1:9222/json/version
(async function () {
  const browser = await puppeteer.connect({
    browserWSEndpoint: "browserWSEndpoint",
  });
  const page = (await browser.pages())[0];
  await page.goto(`https://www.instagram.com/`);

  const cookies = JSON.stringify(await page.cookies());
  const sessionStorage = await page.evaluate(() =>
    JSON.stringify(sessionStorage)
  );
  const localStorage = await page.evaluate(() => JSON.stringify(localStorage));

  await fs.writeFileSync("./cookies.json", cookies);
  await fs.writeFileSync("./sessionStorage.json", sessionStorage);
  await fs.writeFileSync("./localStorage.json", localStorage);
})();
