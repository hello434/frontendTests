export default class coreUIActions {
    elementClick({el} : {el: Cypress.Chainable<JQuery<HTMLElement>>}) : void {
        el.click();
    }
  
    inputType({el, value} : {el: Cypress.Chainable<JQuery<HTMLElement>> , value: string}) : void {
        el.click().type('{selectall}{backspace}').type(value).wait(300);
    }
  }
  