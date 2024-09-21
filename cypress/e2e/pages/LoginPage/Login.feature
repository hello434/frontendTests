Feature: Login page
The purpose of this feature is to test the functionality of the login page, including successful authorization, as well as scenarios with incorrect or missing data

Background:
Given User opens login page

Scenario: Successful login with valid credentials
    Then User fills login and password
    Then User clicks on login button
    Then User successfully logs in