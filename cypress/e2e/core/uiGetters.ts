export default class coreUI {
    getTestElementByID({el} : {el: string}) : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`[id="${el}"]`)
    }
}