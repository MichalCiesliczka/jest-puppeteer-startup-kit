import fs from "fs";
require("expect-puppeteer");

export const registerScreenshotReporter = () => {
  let screenshotPromise = Promise.resolve();
  beforeEach(() => screenshotPromise);
  afterAll(() => screenshotPromise);

  jasmine.getEnv().addReporter({
    specDone: async result => {
      if (result.status === "failed") {
        screenshotPromise = screenshotPromise
          .then(async () => {
            fs.mkdir("./tests_screenshots", () => {});
            await page.screenshot({
              path: `./tests_screenshots/${
                result.fullName
              }-${new Date().valueOf()}.png`
            });
          })
          .catch();
      }
    }
  });
};

registerScreenshotReporter();
