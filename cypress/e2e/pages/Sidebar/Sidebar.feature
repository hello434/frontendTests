Feature: Sidebar Menu
The purpose of the tests is to check the functionality of the sidebar - the ability to log out, 
delete all items from the cart, and go to the list of products available for purchase.

Background: 
Given User is on product list page

Scenario: Successful log out from sidebarmenu
Given User clicks on the burger button
When User clicks on the log out option
Then User successfully logged out

Scenario: Navigate to product list via sidebar All Items button
When User clicks on random item
Given User clicks on the burger button
When User clicks on all items option
Then User is on the product list and checks URL match

Scenario: Reset app state via sidebar Reset App State
When User clicks on random item
When User clicks to add to cart button from product description page
Then User clicks to shopping cart button
Then Product was successfully added to shopping cart
Given User clicks on the burger button
When User clicks on Reset App State option
When User clicks on all items option
Then User clicks to shopping cart button
Then Product was successfully deleted from shopping cart


