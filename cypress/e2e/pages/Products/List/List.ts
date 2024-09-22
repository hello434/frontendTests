import ProductsList from "../List/ListPageObjectModel";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import coreUIActions from '../../../core/uiActions';
import router from "../../../../routes/common";
import Assertions from '../../../core/assertions';
import LoginPage from "../../LoginPage/Login/LoginPageObjectModel";
import { faker } from '@faker-js/faker';

const productsListInstance = new ProductsList();
const loginPageInstance = new LoginPage();
const coreUIActionsInstance = new coreUIActions();
const assertionsInstance = new Assertions();
const randomId = Math.floor(Math.random() * 6);
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const postalCode = faker.location.zipCode();

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

When('The user clicks on the Checkout button', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.cartCheckout})
})

Then('User fills first name', () => {
    coreUIActionsInstance.inputType({el: productsListInstance.cartFisrtName, value: firstName })
})

Then('User fills last name', () => {
    coreUIActionsInstance.inputType({el: productsListInstance.cartLastName, value: lastName })
})

Then('User fills postal code', () => {
    coreUIActionsInstance.inputType({el: productsListInstance.cartPostalCode, value: postalCode })
})

When('The user clicks on the Continue button', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.cartContinue})
})

Then('User can not continue to checkout and error message appears', () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.cartError})
})

Then('The user clicks on the Cancel button', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.cartCancel})
})

When('The user clicks on the Finish button', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.checkoutFinish})
})

Then('The order was successfully completed', () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.checkoutComplete})
})