import ProductsList from "../List/ListPageObjectModel";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import coreUIActions from '../../../core/uiActions';
import router from "../../../../routes/common";
import Assertions from '../../../core/assertions';
import LoginPage from "../../LoginPage/Login/LoginPageObjectModel";

const productsListInstance = new ProductsList();
const loginPageInstance = new LoginPage();
const coreUIActionsInstance = new coreUIActions();
const assertionsInstance = new Assertions();
const randomId = Math.floor(Math.random() * 6);

Given('User is on product list page', () => {
    cy.visit(router.loginPage);
    cy.fixture('standard_user').then((user) => {
        coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: user.username });
        coreUIActionsInstance.inputType({ el: loginPageInstance.loginPagePasswordInput, value: user.password });
      });
    cy.visit(router.productList)
})

When('User clicks on random item' , () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.getProductTitle({id: randomId})})
})

When('User clicks to add to cart button from product description page' , () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.inventoryAddToCart})
})

Then('User clicks to shopping cart button', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.listShoppingCart})
}) 

Then('Product was successfully added to shopping cart', () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.getProductTitle({id: randomId})})
})

Then('Product was removed from shopping cart', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.cartRemoveFromCart})
})

Then('Product was successfully deleted from shopping cart', () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.getProductTitle({id: randomId}), shouldExist: false})
})