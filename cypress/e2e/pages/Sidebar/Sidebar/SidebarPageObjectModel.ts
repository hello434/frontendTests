import coreUI from "../../../core/uiGetters";

export default class SidebarMenu {
    get burgerButton() {
        return new coreUI().getElementByClass({el: 'bm-burger-button'})
    }

    get burgerLogout() {
        return new coreUI().getElementByID({el: 'logout_sidebar_link'})
    }

    get burgerAllItems() {
        return new coreUI().getElementByID({el: 'inventory_sidebar_link'})
    }

    get burgerResetAppState() {
        return new coreUI().getElementByID({el: 'reset_sidebar_link'})
    }
}