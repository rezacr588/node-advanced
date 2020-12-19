const puppeteer = require('puppeteer');
let browser, page;
beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("localhost:3000");
});
afterEach(async () => {
  await browser.close();
});
test("Adds to numbers", () => {
  const sum = 1 + 2;
  expect(sum).toEqual(3);
});
test("the header has the currect test", async () => {
  const text = await page.$eval('a.brand-logo', (el) => el.innerHTML);
  expect(text).toEqual("Blogster");
});
test("clicking login starts OAuth Flow", async () => {
  await page.click('.right a');
  const url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});
