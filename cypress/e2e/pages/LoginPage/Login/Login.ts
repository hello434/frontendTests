import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import router from '../../../../routes/common';
import coreUIActions from '../../../core/uiActions';
import LoginPage from '../Login/LoginPageObjectModel';
import Assertions from '../../../core/assertions';
import ProductsList from '../../Products/List/ListPageObjectModel';
import { faker } from '@faker-js/faker';

const coreUIActionsInstance = new coreUIActions();
const loginPageInstance = new LoginPage();
const assertionsInstance = new Assertions();
const productsListInstance = new ProductsList();

const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

Given('User opens login page', () => {
  cy.visit(router.loginpage);
});

Then('User fills valid login', () => {
  cy.fixture('standard_user').then((user) => {
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: user.username });
  });
});

Then('User fills invalid login', () => {
    coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: randomEmail});
});

Then('User fills invalid password', () => {
  coreUIActionsInstance.inputType({ el: loginPageInstance.loginPagePasswordInput, value: randomPassword});
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