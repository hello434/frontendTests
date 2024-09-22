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