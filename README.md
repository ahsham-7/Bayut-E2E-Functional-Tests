### Bayut E2E Functional Tests
This project contains end-to-end (E2E) functional tests for the Bayut platform, utilizing WebdriverIO, Mocha, and Chai for testing and assertions. Allure is used to generate detailed test reports, and GitHub Actions is integrated for continuous integration (CI) and deployment of reports to GitHub Pages.

## Features
### Automated E2E Testing: 
Uses WebdriverIO with the Mocha testing framework to perform functional tests on the Bayut platform.
### Assertions with Chai: 
Test cases are written with the Chai assertion library for BDD/TDD-style assertions.
### Reporting: 
Utilizes Allure for detailed reporting and JUnit for test result output.
### Continuous Integration: 
Tests are executed automatically via GitHub Actions on each code push or manual dispatch.
### GitHub Pages Deployment: 
Allure test reports are deployed to GitHub Pages for easy viewing and sharing.


## Key Dependencies
### WebdriverIO: 
Main testing framework used for automating the browser interaction.
### Mocha: 
Testing framework that provides BDD-style testing.
### Chai: 
Assertion library for BDD/TDD testing.
### Allure Reporter: 
Generates reports for test results.
### JUnit Reporter: 
Outputs test results in JUnit XML format (optional).
### ChromeDriver Service: 
Provides support for running tests using Chrome browser.
### rimraf: 
Utility for removing files and directories (used to clean allure-results).

## Contributions
Feel free to contribute to the project by creating issues, submitting pull requests, or suggesting improvements.

## License
This project is licensed under the ISC License.
