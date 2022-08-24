Feature: Ebay.com  website
  As a user, I want to search for Jurassic on ebay website.

  Scenario: Navigating to the url and searching the text
    Given I am on the ebay url 
    When I click on the advanced search 
    Then I see the ebay img and navigate to home page 

      Scenario:searching the text on search bar
    Given search the text in search bar "Jurassic"
    When i click on dropdown and select options
    Then i see the message as succesfully found 