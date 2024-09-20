import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import router from '../../../../routes/common';
import coreUIActions from '../../../core/uiActions';
import LoginPage from '../Login/LoginPageObjectModel';

const coreUIActionsInstance = new coreUIActions();
const loginPageInstance = new LoginPage();

Given('User opens login page', () => {
  cy.visit(router.loginpage);
});

Then('User fills login and password', () => {
  cy.fixture('standard_user').then((user) => {
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: user.username });
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPagePasswordInput, value: user.password });
  });
});
