# Frontend Testing with Cypress and Gherkin

This project demonstrates frontend testing using Cypress, Gherkin, and TypeScript. It showcases how Behavior Driven Development (BDD) can be integrated into the testing process.
## Installation and Setup

1. Clone this repository:
    ```bash
    git clone https://github.com/hello434/frontendTests.git
    ```
   
2. Install dependencies:
    ```bash
    npm install
    ```

3. Open Cypress:
    ```bash
    npx cypress open
    ```

4. To run tests in headless mode:
    ```bash
    npx cypress run
    ```
## Test Examples

### Login Scenarios

1. **Successful login with valid credentials**
   - **Feature:** Login page
   - **Purpose:** Test successful login with valid credentials
   - **Background:**
     - Given User opens login page
   - **Steps:**
     - Then User fills valid login
     - Then User fills valid password
     - When User clicks on login button
     - Then User successfully logs in

2. **Unsuccessful login with invalid password and invalid email**
   - **Feature:** Login page
   - **Purpose:** Test unsuccessful login with both invalid credentials
   - **Background:**
     - Given User opens login page
   - **Steps:**
     - Then User fills invalid login
     - Then User fills invalid password
     - Then User clicks on login button
     - Then The user cannot log in and is on the login page

## Technology Stack

- **Cypress** - Frontend testing tool
- **TypeScript** - Programming language used for development
- **Gherkin** - BDD language for writing test scenarios
- **Cucumber Preprocessor** - For integrating Gherkin with Cypress
- **ESLint** - Tool for identifying and fixing problems in JavaScript/TypeScript code
- **Faker.js** - Library for generating fake data in tests
