
Feature: Multiplication
  Scenario: 1 * 0
    Given I start with 1
    When I multiply by 0
    Then I end up with 0
  Scenario: 1 * 2
    Given I start with 1
    When I multiply by 2
    Then I end up with 2
  Scenario: 2 * 4
    Given I start with 2
    When I multiply by 4
    Then I end up with 8