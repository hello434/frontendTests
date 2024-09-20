import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I open wiki home page", () => {
    cy.visit("https://www.wikipedia.org/");
  });