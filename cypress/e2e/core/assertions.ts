export default class Assertions {
    checkIfElementExists({
        el,
        shouldExist = true,
    }: {
        el: Cypress.Chainable<JQuery<HTMLElement>>
        shouldExist?: boolean
    }): void {
        const existsPrefix = shouldExist ? '' : 'not.'
        el.should(`${existsPrefix}exist`)
    }
    
    checkURLEnding({expectedUrlEnding}: {expectedUrlEnding:string}): void {
        cy.url().should('include', expectedUrlEnding)
    }
}