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

2. **Successfully add product to a cart and succesfully order it**
   - **Feature:** Product List
   - **Purpose:** We are testing this scenario to ensure that users can successfully add a product to the cart, complete the checkout process, and place an order without any issues.
   - **Background:**
     - Given User is on product list page
   - **Steps:**
     - When User clicks on random item
     - When User clicks to add to cart button from product description page
     - Then User clicks to shopping cart button
     - Then Product was successfully added to shopping cart
     - When The user clicks on the Checkout button
     - Then User fills first name
     - Then User fills last name
     - Then User fills postal code
     - When The user clicks on the Continue button
     - Then The user checks the order and makes sure that the product is the same
     - When The user clicks on the Finish button
     - Then The order was successfully completed

## Technology Stack

- **Cypress** - Frontend testing tool
- **TypeScript** - Programming language used for development
- **Gherkin** - BDD language for writing test scenarios
- **Cucumber Preprocessor** - For integrating Gherkin with Cypress
- **ESLint** - Tool for identifying and fixing problems in JavaScript/TypeScript code
- **Faker.js** - Library for generating fake data in tests
