import ProductsList from "../List/ListPageObjectModel";
import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import coreUIActions from '../../../core/uiActions';
import router from "../../../../routes/common";

const productsListInstance = new ProductsList();
const coreUIActionsInstance = new coreUIActions();
const randomId = Math.floor(Math.random() * 6);

Given('User is on product list page', () => {
    cy.visit(router.productList)
})

When('User clicks on random item' , () => {
    coreUIActionsInstance.elementClick({el: productsListInstance.getProductTitle({id: randomId})})
})