Automated Tests with Cypress
This repository contains automated tests for the project using Cypress.

Getting Started
Prerequisites
Node.js (v12 or above)
Git
Installation
Clone the repository:

bash
Copy code
git clone git@github.com:haritha89/Cososys_Work.git

Navigate to the project directory:

bash
cd Cososys_Work

Checkout the master branch:

bash
git checkout master

Install the dependencies:

bash
npm install
Configuration

Before running the tests, make sure to configure the necessary environment variables and test data. The configuration files can be found in the cypress/fixtures directory. Update the files according to your project requirements.

Running the Tests
To run the automated tests, follow these steps:

Open a terminal and navigate to the project directory if you haven't already.

Run the Cypress test runner:

bash

npx cypress open

The Cypress Test Runner will open, displaying the available test files.

Click on a test file to run the tests within that file.

Alternatively, you can run all tests headlessly (in the background) using the following command:

bash

npx cypress run

The test results will be displayed in the terminal.

After the tests complete, you can find the generated test reports and screenshots in the cypress/reports directory.

Contributing
If you'd like to contribute to this project, please follow these guidelines:

Fork the repository on GitHub.

Create a new branch for your changes:

bash

git checkout -b feature/your-feature-name

Make your changes and commit them with descriptive commit messages.

Push your changes to your forked repository.

Submit a pull request to the original repository.



