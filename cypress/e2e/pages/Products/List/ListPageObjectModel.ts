import coreUI from '../../../core/uiGetters'

export default class ProductsList {
    get listShoppingCart() {
        return new coreUI().getTestElementByID({el: 'shopping_cart_container'})
    }
}