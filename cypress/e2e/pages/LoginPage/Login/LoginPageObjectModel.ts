import coreUI from '../../../core/uiGetters'

export default class LoginPage {
    get loginPageLoginInput() {
        return new coreUI().getElementByID({el: 'user-name'})
    }

    get loginPagePasswordInput() {
        return new coreUI().getElementByID({el: 'password'})
    }

    get loginPageLoginButton() {
        return new coreUI().getElementByID({el: 'login-button'})
    }

    get loginPageError() {
        return new coreUI().getElementByDataTest({el: 'error'})
    }
}