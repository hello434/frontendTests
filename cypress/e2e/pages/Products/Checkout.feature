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

Scenario: Successfully add product to a cart and then cancel the order from the checkout
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then The user clicks on the Cancel button
Then Product was removed from shopping cart
Then Product was successfully deleted from shopping cart

Scenario: Successfully add product to a cart and succesfully order it
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then User fills first name
Then User fills last name
Then User fills postal code
When The user clicks on the Continue button
Then The user checks the order and makes sure that the product is the same
When The user clicks on the Finish button
Then The order was successfully completed

Scenario: Successfully add two products to a cart and succesfully order it
When User clicks on random item
When User clicks to add to cart button from product description page
Given User clicks on the burger button
When User clicks on all items option
Then The user clicks on second random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then User fills first name
Then User fills last name
Then User fills postal code
When The user clicks on the Continue button
Then The user checks the order and makes sure that the product is the same
Then The user checks the order and makes sure that the second product is the same
When The user clicks on the Finish button
Then The order was successfully completed

Scenario: Successfully add product to a cart and then cancel the order from the finish page and add one more different product
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then User fills first name
Then User fills last name
Then User fills postal code
When The user clicks on the Continue button
Then The user clicks on the Cancel button
Then The user clicks on second random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
When The user clicks on the Checkout button
Then User fills first name
Then User fills last name
Then User fills postal code
When The user clicks on the Continue button
Then The user checks the order and makes sure that the product is the same
Then The user checks the order and makes sure that the second product is the same
When The user clicks on the Finish button
Then The order was successfully completed


Scenario: Successfully add product to a cart but can not continue to check out without first name
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then User fills last name
Then User fills postal code
When The user clicks on the Continue button
Then User can not continue to checkout and error message appears
Then The user clicks on the Cancel button
Then Product was removed from shopping cart
Then Product was successfully deleted from shopping cart

Scenario: Successfully add product to a cart but can not continue to check out without second name
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then User fills first name
Then User fills postal code
When The user clicks on the Continue button
Then User can not continue to checkout and error message appears
Then The user clicks on the Cancel button
Then Product was removed from shopping cart
Then Product was successfully deleted from shopping cart

Scenario: Successfully add product to a cart but can not continue to check out without postal code
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
Then User fills first name
Then User fills last name
When The user clicks on the Continue button
Then User can not continue to checkout and error message appears
Then The user clicks on the Cancel button
Then Product was removed from shopping cart
Then Product was successfully deleted from shopping cart

Scenario: Successfully add product to a cart but can not continue to check out without personal information
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
When The user clicks on the Checkout button
When The user clicks on the Continue button
Then User can not continue to checkout and error message appears