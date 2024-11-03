const fs = require("fs");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

// https://www.browserless.io/blog/2022/05/13/manage-sessions/
// "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=9222
// http://127.0.0.1:9222/json/version
(async () => {
  const timestamp = new Date();
  const browser = await puppeteer.connect({
    browserWSEndpoint: "ws://127.0.0.1:9222/devtools/browser/3915cc84-9c4d-41cc-ad05-0d45bdb7d132",
  });
  const page = (await browser.pages())[0];
  const accounts = [
    "bts.bighitofficial",
    "jin",
    "agustd",
    "uarmyhope",
    "rkive",
    "j.m",
    "thv",
  ];
  const data = [];

  for (const account of accounts) {
    const result = await scrapAccount(page, account);
    data.push(result);
  }

  await browser.close();

  const results = {
    data,
    timetamp: timestamp.toISOString(),
  };
  fs.writeFileSync("instagram.json", JSON.stringify(results, null, 2) + "\n");
})();

async function scrapAccount(page, id) {
  await page.goto(`https://www.instagram.com/${id}/`);
  await page.waitForSelector("button");
  const content = await page.content();
  const $ = cheerio.load(content);
  const followers = $("a")
    .filter(function (i, el) {
      return $(el).text().includes("followers");
    })
    .find("span")
    .attr("title");
  return {
    id,
    followers: +followers.replaceAll(",", ""),
  };
}
