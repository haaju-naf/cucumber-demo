Feature: Shopping
  Scenario: Check total price in cart
    Given I open a browser, e.g. Chrome
    And navigate to "http://automationpractice.com/index.php"
    When I add "Printed Dress" to Shopping Cart
    And I add "Blouse" to Shopping Cart
    And I want to view Shopping Cart
    Then I check Total Price