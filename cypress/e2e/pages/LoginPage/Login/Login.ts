import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import router from '../../../../routes/common';
import coreUIActions from '../../../core/uiActions';
import LoginPage from '../Login/LoginPageObjectModel';
import Assertions from '../../../core/assertions';
import ProductsList from '../../Products/List/ListPageObjectModel';

const coreUIActionsInstance = new coreUIActions();
const loginPageInstance = new LoginPage();
const assertionsInstance = new Assertions();
const productsListInstance = new ProductsList();

Given('User opens login page', () => {
  cy.visit(router.loginpage);
});

Then('User fills login and password', () => {
  cy.fixture('standard_user').then((user) => {
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: user.username });
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPagePasswordInput, value: user.password });
  });
});

Then('User clicks on login button', () => {
    coreUIActionsInstance.elementClick({el: loginPageInstance.loginPageLoginButton})
});

Then('User successfully logs in' , () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.listShoppingCart})
})