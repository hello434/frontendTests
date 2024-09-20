import coreUI from '../../../core/uiGetters'

export default class LoginPage {
    get loginPageLoginInput() {
        return new coreUI().getTestElementByID({el: 'user-name'})
    }

    get loginPagePasswordInput() {
        return new coreUI().getTestElementByID({el: 'password'})
    }

    get loginPageLoginButton() {
        return new coreUI().getTestElementByID({el: 'login-button'})
    }
}