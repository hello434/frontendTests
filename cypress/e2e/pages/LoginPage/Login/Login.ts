import { Given } from "@badeball/cypress-cucumber-preprocessor";
import router from "../../../../routes/common";

Given('TEST', () => {
    cy.visit('/');
  });