import { Given } from "@badeball/cypress-cucumber-preprocessor";
import router from "../../../../routes/common";

Given("I open the login page", () => {
    cy.visit(router.loginpage);
  });