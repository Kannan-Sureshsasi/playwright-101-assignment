# Playwright 101 Assignment

A Playwright automation project implementing the Playwright 101 assignment scenarios using **TypeScript, Playwright Test, Node.js, and LambdaTest/TestMu AI cloud execution**.

The project is designed to automate the Selenium Playground application and validate the expected behavior of the assigned scenarios across supported browsers.

---

## 📌 Project Overview

This project contains automated end-to-end tests created as part of the **Playwright 101 Assignment**.

The automation is developed using:

* **Playwright**
* **TypeScript**
* **Node.js**
* **Playwright Test**
* **LambdaTest / TestMu AI**
* **Git & GitHub**

The project includes local browser execution as well as configuration for cloud-based browser testing.

---

## 🎯 Test Application

The automation tests are performed on the TestMu AI / LambdaTest Selenium Playground:

**Base URL:**

```text
https://www.testmuai.com/selenium-playground/
```

The Playwright configuration uses this URL as the project `baseURL`, allowing the tests to navigate to application pages using relative paths.

---

# 🧪 Test Scenarios

## Scenario 1 — Simple Form Demo

The Simple Form Demo scenario validates the basic interaction between Playwright and the web application.

### Test flow

1. Navigate to the Selenium Playground.
2. Open the **Simple Form Demo** page.
3. Validate the page URL.
4. Locate the message input field.
5. Enter the required message.
6. Click the **Show Message** button.
7. Validate that the entered message is displayed correctly.

### Validations

* Page navigation
* URL validation
* Text input
* Button interaction
* Displayed message validation

---

## Scenario 2 — Drag & Drop Sliders

The Drag & Drop Sliders scenario validates Playwright's ability to interact with range sliders and keyboard controls.

### Test flow

1. Navigate to the **Drag & Drop Sliders** page.
2. Locate the slider with the required initial value.
3. Interact with the slider.
4. Use keyboard interaction where required.
5. Move the slider to the target value of **95**.
6. Validate the slider value.
7. Validate the displayed range value.

### Validations

* Slider identification
* Mouse/keyboard interaction
* Target value validation
* Displayed value validation

---

## Scenario 3 — Input Form Submit

The Input Form Submit scenario validates form handling, browser validation, dropdown selection, and successful form submission.

### Test flow

1. Navigate to the **Input Form Submit** page.
2. Attempt to submit the form without entering the required information.
3. Validate the browser's required-field validation behavior.
4. Enter the required form information.
5. Select **United States** from the country dropdown.
6. Submit the form.
7. Validate the successful submission message.

### Validations

* Required-field validation
* Form input
* Dropdown selection
* Form submission
* Success message validation

---

# 🌐 Browser Coverage

The Playwright project is configured to support browser-based execution.

### Local Browser

* Chromium
* Desktop Chrome configuration

### Cloud Execution

The project also contains LambdaTest/TestMu AI configuration for cloud-based browser testing.

This allows the same Playwright tests to be executed in a remote browser environment.

---

# ⚙️ Playwright Configuration

The main Playwright configuration is maintained in:

```text
playwright.config.ts
```

The configuration includes:

* Base URL
* Test workers
* HTML reporter
* List reporter
* Trace collection
* Screenshot capture
* Video recording
* Headless execution
* Action timeout
* Navigation timeout
* Browser projects

Example configuration features:

```text
baseURL
workers
reporter
trace
screenshot
video
headless
actionTimeout
navigationTimeout
projects
```

### Test Execution Settings

The project is configured with:

```text
Workers: 2
Headless: true
Action Timeout: 15 seconds
Navigation Timeout: 30 seconds
```

Tracing is configured to capture information on the first retry, while screenshots and videos are retained when tests fail.

---

# ☁️ LambdaTest / TestMu AI Integration

The project contains:

```text
lambdatest-setup.ts
```

This file is used for the cloud execution setup.

The project can be configured to connect Playwright tests with the LambdaTest/TestMu AI browser infrastructure.

### Important

Cloud credentials should **never be committed to GitHub**.

Use environment variables for credentials such as:

```text
LT_USERNAME
LT_ACCESS_KEY
```

If your cloud configuration uses different environment variable names, use the names defined in your `lambdatest-setup.ts` file.

Add credential files containing sensitive information to `.gitignore`.

---

# 📁 Project Structure

```text
Playwright101Assignment/
│
├── tests/
│
├── playwright101.spec.ts
├── lambdatest-setup.ts
├── playwright.config.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
│
├── playwright-report/
│
├── test-results/
│
└── node_modules/
```

### Important Files

| File / Folder           | Purpose                                                   |
| ----------------------- | --------------------------------------------------------- |
| `playwright101.spec.ts` | Contains the Playwright assignment test cases             |
| `lambdatest-setup.ts`   | LambdaTest/TestMu AI cloud execution setup                |
| `playwright.config.ts`  | Playwright test configuration                             |
| `package.json`          | Project dependencies and npm scripts                      |
| `package-lock.json`     | Locks installed dependency versions                       |
| `tsconfig.json`         | TypeScript compiler configuration                         |
| `tests/`                | Test-related files                                        |
| `playwright-report/`    | Generated HTML test report                                |
| `test-results/`         | Test execution artifacts                                  |
| `.gitignore`            | Prevents unnecessary/sensitive files from being committed |
| `node_modules/`         | Installed Node.js dependencies                            |

---

# 🛠️ Technologies Used

* **Playwright**
* **TypeScript**
* **Node.js**
* **Playwright Test**
* **LambdaTest / TestMu AI**
* **Git**
* **GitHub**
* **Visual Studio Code**

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Kannan-Sureshsasi/Playwright101Assignment.git
```

Navigate into the project:

```bash
cd Playwright101Assignment
```

---

## 2. Install Dependencies

Install the Node.js dependencies:

```bash
npm install
```

---

## 3. Install Playwright Browsers

If Playwright browsers have not already been installed:

```bash
npx playwright install
```

For Chromium only:

```bash
npx playwright install chromium
```

---

# ▶️ Running the Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run Tests in Headed Mode

To see the browser while the tests are running:

```bash
npx playwright test --headed
```

---

## Run a Specific Test File

```bash
npx playwright test playwright101.spec.ts
```

If the test file is inside the `tests` folder:

```bash
npx playwright test tests/playwright101.spec.ts
```

---

## Run Tests Using a Specific Browser Project

For the configured Chromium project:

```bash
npx playwright test --project=chromium
```

---

# 📊 Test Reports

The project is configured to generate an HTML test report.

After test execution, open the report using:

```bash
npx playwright show-report
```

The generated report provides information such as:

* Test status
* Passed tests
* Failed tests
* Execution duration
* Test steps
* Screenshots
* Traces
* Videos when available

The report is generated inside:

```text
playwright-report/
```

---

# 🔍 Debugging Failed Tests

Playwright tracing is enabled for retries.

If a test fails, the project can retain debugging information such as:

* Screenshots
* Videos
* Trace files

These artifacts are stored under:

```text
test-results/
```

To run tests in Playwright's headed/debug-friendly mode:

```bash
npx playwright test --headed
```

You can also use Playwright's debugging mode:

```bash
npx playwright test --debug
```

---

# 🧩 Playwright Features Used

This project demonstrates several important Playwright automation concepts.

### Browser Automation

Playwright launches and controls the browser automatically.

### Locators

The tests use Playwright locators to identify and interact with web elements.

### Assertions

Assertions are used to verify expected application behavior.

### Auto-Waiting

Playwright automatically waits for elements to become actionable before performing interactions.

### Keyboard Interaction

Keyboard actions are used where required, particularly for slider manipulation.

### Dropdown Selection

Playwright is used to select values from form dropdowns.

### URL Validation

The tests validate navigation and expected page URLs.

### Screenshots

Screenshots can be captured when tests fail.

### Video Recording

Video recording is configured for failed test executions.

### Trace

Playwright tracing is enabled for the first retry to assist with debugging.

---

# 🧪 Test Execution Flow

```text
Start Test
    │
    ▼
Launch Playwright
    │
    ▼
Open Selenium Playground
    │
    ├── Scenario 1
    │     ├── Open Simple Form Demo
    │     ├── Enter Message
    │     ├── Click Show Message
    │     └── Validate Message
    │
    ├── Scenario 2
    │     ├── Open Drag & Drop Sliders
    │     ├── Locate Slider
    │     ├── Move Slider
    │     ├── Set Value to 95
    │     └── Validate Value
    │
    └── Scenario 3
          ├── Open Input Form Submit
          ├── Validate Required Fields
          ├── Fill Form
          ├── Select United States
          ├── Submit Form
          └── Validate Success Message
    │
    ▼
Generate Test Results
    │
    ▼
Generate HTML Report
```

---

# 🔐 Security

Sensitive credentials must not be stored directly in the source code.

Do not commit:

```text
LambdaTest username
LambdaTest access key
API keys
Passwords
Tokens
```

Use environment variables instead.

Example:

```text
LT_USERNAME=<your-username>
LT_ACCESS_KEY=<your-access-key>
```

Make sure sensitive files and environment files are included in `.gitignore`.

---

# 📦 GitHub Repository

This project is maintained as a GitHub repository for version control and assignment submission.

Repository:

**Kannan-Sureshsasi/Playwright101Assignment**

---

# 👨‍💻 Author

**Kannan S.**

MCA Student | Aspiring Software Tester / QA Engineer

### Technical Interests

* Software Testing
* Test Automation
* Playwright
* Selenium
* Java
* TypeScript
* C#
* .NET
* SQL
* Web Automation

---

# 📌 Assignment Summary

This project demonstrates practical Playwright automation skills by implementing the assigned Selenium Playground scenarios, validating application behavior through assertions, configuring browser execution, generating test reports, and preparing the project for cloud-based execution through LambdaTest/TestMu AI.

The project also demonstrates a structured approach to test automation using reusable Playwright configuration, automated reporting, screenshots, videos, traces, and browser projects.

---

## ⭐ Key Takeaways

Through this assignment, the project demonstrates:

* End-to-end browser automation with Playwright
* TypeScript-based test development
* Playwright Test configuration
* Web element interaction
* Assertions and validations
* Keyboard and slider automation
* Form handling
* Dropdown selection
* Browser validation testing
* Test reporting
* Failure debugging
* Browser configuration
* Cloud testing preparation
* Git and GitHub project management
