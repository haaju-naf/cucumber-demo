$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumber\shopping.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Shopping",
  "description": "",
  "id": "shopping",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Check total price in cart",
  "description": "",
  "id": "shopping;check-total-price-in-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I open a browser, e.g. Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "navigate to \"http://automationpractice.com/index.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I add \"Printed Dress\" to Shopping Cart",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I add \"Blouse\" to Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I want to view Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I check Total Price",
  "keyword": "Then "
});
formatter.match({
  "location": "TestShopping.openBrowser()"
});
formatter.result({
  "duration": 4260971600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php",
      "offset": 13
    }
  ],
  "location": "TestShopping.navigateToURL(String)"
});
formatter.result({
  "duration": 7371802400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 7
    }
  ],
  "location": "TestShopping.addItemToCart(String)"
});
formatter.result({
  "duration": 20611703100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 7
    }
  ],
  "location": "TestShopping.addItemToCart(String)"
});
formatter.result({
  "duration": 10735975300,
  "status": "passed"
});
formatter.match({
  "location": "TestShopping.viewShoppingCart()"
});
formatter.result({
  "duration": 2840174500,
  "status": "passed"
});
formatter.match({
  "location": "TestShopping.checkTotalPrice()"
});
formatter.result({
  "duration": 75742100,
  "status": "passed"
});
});