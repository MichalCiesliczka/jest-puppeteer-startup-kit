import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    // slowMo: 200,
  });
  page = await browser.newPage();
});

beforeEach(async () => {
  await page.goto('http://localhost:3000/');
});

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
	await page.waitForSelector('.App-title');

	const html = await page.$eval('.App-title', e => e.innerHTML);
  expect(html).toBe('Welcoma!');
}, 16000);
});

afterAll(() => {
  browser.close();
});
