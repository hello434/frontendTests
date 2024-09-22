import coreUI from '../../../core/uiGetters'

export default class ProductsList {
    get listShoppingCart() {
        return new coreUI().getElementByID({el: 'shopping_cart_container'})
    }

    getProductTitle({id} : {id: number}){
        return new coreUI().getElementByID({el: `item_${id}_title_link`})
    }
    
    get inventoryAddToCart() {
        return new coreUI().getElementByClass({el: 'btn_primary btn_inventory'})
    }
   
    get cartRemoveFromCart() {
        return new coreUI().getElementByClass({el: 'btn_secondary cart_button'})
    }

    get cartCheckout() {
        return new coreUI().getElementByClass({el: 'btn_action checkout_button'})
    }

    get cartFisrtName() {
        return new coreUI().getElementByDataTest({el: 'firstName'})
    }

    get cartLastName() {
        return new coreUI().getElementByDataTest({el: 'lastName'})
    }

    get cartPostalCode() {
        return new coreUI().getElementByDataTest({el: 'postalCode'})
    }

    get cartContinue() {
        return new coreUI().getElementByClass({el: 'btn_primary cart_button'})
    }

    get cartCancel() {
        return new coreUI().getElementByClass({el: 'cart_cancel_link btn_secondary'})
    }

    get cartError() {
        return new coreUI().getElementByDataTest({el: 'error'})
    }

    get checkoutFinish() {
        return new coreUI().getElementByClass({el: 'btn_action cart_button'})
    }

    get checkoutComplete() {
        return new coreUI().getElementByClass({el: 'complete-text'})
    }
}