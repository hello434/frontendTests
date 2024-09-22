import ProductsList from "../../Products/Checkout/ProductstPageObjectModel";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import coreUIActions from '../../../core/uiActions';
import router from "../../../../routes/common";
import Assertions from '../../../core/assertions';
import LoginPage from "../../LoginPage/Login/LoginPageObjectModel";
import SidebarMenu from "./SidebarPageObjectModel";

const productsListInstance = new ProductsList();
const loginPageInstance = new LoginPage();
const coreUIActionsInstance = new coreUIActions();
const assertionsInstance = new Assertions();
const firstRandomID = Math.floor(Math.random() * 6);
const secondRandomID = Math.floor(Math.random() * 6);
const sidebarMenuInstance = new SidebarMenu()

Given('User is on product list page', () => {
    cy.visit(router.loginPage);
    cy.fixture('standard_user').then((user) => {
        coreUIActionsInstance.inputType({ el: loginPageInstance.loginPageLoginInput, value: user.username });
        coreUIActionsInstance.inputType({ el: loginPageInstance.loginPagePasswordInput, value: user.password });
      });
    cy.visit(router.productList)
})

Given('User clicks on the burger button', () => {
    coreUIActionsInstance.elementClick({el: sidebarMenuInstance.burgerButton})
})

When('User clicks on the log out option', () => {
    coreUIActionsInstance.elementClick({el: sidebarMenuInstance.burgerLogout})
})

Then('User successfully logged out', () => {
    assertionsInstance.checkIfElementExists({el: loginPageInstance.loginPageLoginButton})
})

When('User clicks on random item' , () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.getProductTitle({id: firstRandomID})})
})

When('User clicks on all items option' , () => {
    coreUIActionsInstance.elementClick({el: sidebarMenuInstance.burgerAllItems})
})

Then('User is on the product list and checks URL match' , () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.getProductTitle({id: firstRandomID})})
    assertionsInstance.checkIfElementExists({el: productsListInstance.getProductTitle({id: secondRandomID})})
    assertionsInstance.checkURLEnding({expectedUrlEnding: router.productList})
})

When('User clicks to add to cart button from product description page' , () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.inventoryAddToCart})
})

Then('User clicks to shopping cart button', () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.listShoppingCart})
}) 

Then('Product was successfully added to shopping cart', () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.getProductTitle({id: firstRandomID})})
})

When('User clicks on Reset App State option' , () => {
    coreUIActionsInstance.elementClick({el: sidebarMenuInstance.burgerResetAppState})
})

Then('Product was successfully deleted from shopping cart', () => {
    assertionsInstance.checkIfElementExists({el: productsListInstance.getProductTitle({id: firstRandomID}), shouldExist: false})
})