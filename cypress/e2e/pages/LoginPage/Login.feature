Feature: Login page
The purpose of this feature is to test the functionality of the login page, including successful authorization, as well as scenarios with incorrect or missing data

Background:
Given User opens login page

Scenario: Successful login with valid credentials
    Then User fills valid login
    Then User fills valid password
    When User clicks on login button
    Then User successfully logs in

Scenario: Unsuccessful login with invalid password and invalid email
    Then User fills invalid login
    Then User fills invalid password
    Then User clicks on login button
    Then The user cannot log in and is on the loginpage

Scenario: Unsuccessful login with existing password and invalid email
    Then User fills invalid login
    Then User fills valid password
    Then User clicks on login button
    Then The user cannot log in and is on the loginpage

Scenario: Unsuccessful login with invalid password and valid email
    Then User fills valid login
    Then User fills invalid password
    Then User clicks on login button
    Then The user cannot log in and is on the loginpage

Scenario: Unsuccessful login without filled credentials
    Then User clicks on login button
    Then The user cannot log in and is on the loginpage

Scenario: Unsuccessful login with valid email and without password
    Then User fills valid login
    Then User clicks on login button
    Then The user cannot log in and is on the loginpage

Scenario: Unsuccessful login with existing password and without email
    Then User fills valid password
    Then User clicks on login button
    Then The user cannot log in and is on the loginpage