import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
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

Then('User fills valid login', () => {
  cy.fixture('standard_user').then((user) => {
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: user.username });
  });
});

Then('User fills valid password', () => {
  cy.fixture('standard_user').then((user) => {
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPagePasswordInput, value: user.password });
  });
});

When('User clicks on login button', () => {
    coreUIActionsInstance.elementClick({el: loginPageInstance.loginPageLoginButton})
});

Then('User successfully logs in' , () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.listShoppingCart})
})

Then('The user cannot log in and is on the loginpage', () => {
    assertionsInstance.checkIfElementExists({el: loginPageInstance.loginPageError})
    assertionsInstance.checkIfElementExists({el: productsListInstance.listShoppingCart, shouldExist: false})
})