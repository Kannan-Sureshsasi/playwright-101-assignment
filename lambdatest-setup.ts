import * as base from '@playwright/test';
import path from 'path';
import { chromium } from 'playwright';

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright 101 Assignment',
    name: 'Playwright 101 Test',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    tunnel: false,
  },
};

const modifyCapabilities = (configName: string, testName: string) => {
  const config = configName.split('@lambdatest')[0];
  const [browserName, browserVersion, platform] = config.split(':');

  capabilities.browserName = browserName || capabilities.browserName;
  capabilities.browserVersion = browserVersion || capabilities.browserVersion;
  capabilities['LT:Options'].platform =
    platform || capabilities['LT:Options'].platform;

  capabilities['LT:Options'].name = testName;
};

const getErrorMessage = (obj: any, keys: string[]) =>
  keys.reduce(
    (value, key) =>
      typeof value === 'object' ? value?.[key] : undefined,
    obj
  );

const test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    const fileName = testInfo.file.split(path.sep).pop();

    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(
        testInfo.project.name,
        `${testInfo.title} - ${fileName}`
      );

      const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities)
        )}`,
      });

      const ltPage = await browser.newPage(testInfo.project.use);

      await use(ltPage);

      const testStatus = {
        action: 'setTestStatus',
        arguments: {
          status: testInfo.status,
          remark: getErrorMessage(testInfo, ['error', 'message']),
        },
      };

      await ltPage.evaluate(
        () => {},
        `lambdatest_action: ${JSON.stringify(testStatus)}`
      );

      await ltPage.close();
      await browser.close();
    } else {
      await use(page);
    }
  },
});

export default test;