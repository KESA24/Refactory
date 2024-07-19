
Feature: Summation
  Scenario: 1 + 0
    Given I start with 1
    When I add 0
    Then I end up with 1
  Scenario: 1 + 5
    Given I start with 1
    When I add 5
    Then I end up with 6
  Scenario: 10 + 10
    Given I start with 10
    When I add 10
    Then I end up with 20
