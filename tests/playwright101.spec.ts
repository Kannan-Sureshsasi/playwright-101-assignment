import test from '../lambdatest-setup';
import { expect } from '@playwright/test';

const BASE_URL = 'https://www.testmuai.com/selenium-playground/';

test.describe('Playwright 101 Assignment', () => {

  test('Scenario 1 - Simple Form Demo', async ({ page }) => {
    const message = 'Welcome to TestMu AI';

    await page.goto(BASE_URL);

    await page.getByText('Simple Form Demo', { exact: true }).click();

    await expect(page).toHaveURL(/simple-form-demo/);

    await page.getByPlaceholder('Please enter your Message').fill(message);

    await page.getByRole('button', { name: 'Get Checked Value' }).click();

    await expect(page.locator('#message')).toHaveText(message);
  });


  test('Scenario 2 - Drag & Drop Slider', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.getByText('Drag & Drop Sliders', { exact: true }).click();

  const slider = page.locator('input[type="range"]').nth(2);

  await slider.fill('95');

  await expect(slider).toHaveValue('95');
  });


  test('Scenario 3 - Input Form Submit', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByText('Input Form Submit', { exact: true }).click();

    const submitButton = page.locator('#seleniumform button[type="submit"]');

    await submitButton.click();

    const nameInput = page.locator('input[name="name"]');

    await expect(nameInput).toBeFocused();

    await nameInput.fill('Kannan');

    await page.locator('#inputEmail4').fill('kannan@example.com');

    await page.locator('input[name="password"]').fill('Test@12345');

    await page.locator('#company').fill('Test Company');

    await page.locator('#websitename').fill('https://example.com');

    await page.locator('select[name="country"]').selectOption({
      label: 'United States'
    });

    await page.locator('#inputCity').fill('Chennai');

    await page.locator('#inputAddress1').fill('Test Address 1');

    await page.locator('#inputAddress2').fill('Test Address 2');

    await page.locator('#inputState').fill('Tamil Nadu');

    await page.locator('#inputZip').fill('600001');

    await submitButton.click();

    await expect(
      page.getByText(
        'Thanks for contacting us, we will get back to you shortly.'
      )
    ).toBeVisible();
  });

});