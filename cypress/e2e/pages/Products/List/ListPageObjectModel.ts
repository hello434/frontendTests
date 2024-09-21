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
}