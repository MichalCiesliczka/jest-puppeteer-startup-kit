import { SWHeroes } from "../__mocks__/api";

beforeAll(async () => {
  await page.goto("http://localhost:3000");
  await page.setRequestInterception(true);
  page.on("request", request => {
    if (request.url().includes("api")) {
      setTimeout(() => {
        request.respond({
          contentType: "application/json",
          body: JSON.stringify({
            results: SWHeroes
          })
        });
      }, 100);
    } else {
      request.continue();
    }
  });
});

describe("Title Text", () => {
  test("loads with correct text", async () => {
    await page.waitForSelector('[data-testid="App-title"');
    const html = await page.$eval('[data-testid="App-title"', e => e.innerHTML);
    expect(html).toBe("Welcome!");
  }, 16000);
});

describe("Heroes list", async () => {
  test("should be empty at first glance and displays loading message", async () => {
    await page.waitForSelector('[data-testid="App-loader"]');

    const html = await page.$eval(
      '[data-testid="App-loader"]',
      e => e.innerHTML
    );
    expect(html).toBe("Waiting for heroes...");
  });

  test("should be filled", async () => {
    await page.waitForSelector('[data-testid="App-heroes-list"]');

    const heroes = await page.$$('[data-testid="App-heroes-list"] > li');
    expect(heroes.length).toBe(10);
  });
});
