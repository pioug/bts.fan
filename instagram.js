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
  await page.goto(`https://bibliogram.froth.zone/u/${id}/`);
  await page.waitForSelector('.profile-counter');
  const content = await page.content();
  const $ = cheerio.load(content);
  const followers = $(".profile-counter")
    .filter(function (i, el) {
      return $(el).text().includes("Followed by");
    })
    .first()
    .find("span")
    .attr("data-numberformat");
  return {
    id,
    followers: parseFloat(followers),
  };
}
