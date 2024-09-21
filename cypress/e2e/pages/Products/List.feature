Feature: Product List
The purpose of this feature is to test the ability to add, edit, and remove products from the cart.

Background: 
Given User is on product list page

Scenario: Successfully add product to a cart and then removes it
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
Then Product was removed from shopping cart
Then Product was successfully deleted from shopping cart

