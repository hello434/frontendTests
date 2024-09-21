export default class coreUI {
    getElementByID({el} : {el: string}) : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[id="${el}"]`)
    }

    getElementByDataTest({el} : {el: string}) : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[data-test="${el}"]`)
    }

    getElementByClass({el} : {el: string}) : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[class="${el}"]`)
    }
}