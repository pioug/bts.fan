const fs = require("fs");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

(async () => {
  const timestamp = new Date();
  const browser = await puppeteer.launch();
  const page = (await browser.pages())[0];
  const accounts = [
    "bts.bighitofficial",
    "jin",
    "agustd",
    "uarmyhope",
    "rkive",
    "j.m",
    "thv",
    "jungkook.97",
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
  const followers = $("button")
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
