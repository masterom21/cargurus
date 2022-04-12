Feature: Search functionality

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Search Cars" link
    Then I navigate to "New & Used Car Search - carsguide" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make          | model     | location     | price    |
      | Alfa Romeo    | 147       | ACT - All    | $30,000  |
      | Audi          | Q3        | ACT - All    | $40,000  |
      | BMW           | Any Model | NSW - Sydney | $50,000  |
      | Honda         | CR-V      | Any Location | $60,000  |
      | Mercedes-Benz | A-Class   | Any Location | $100,000 |
      | Jeep          | Compass   | NSW - Sydney | $90,000  |



  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click "Used" link
    Then I navigate to "Used Cars For Sale" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:

      | make          | model     | location     | price   |
      | Alfa Romeo    | 147       | ACT - All    | $10,000 |
      | Audi          | Any Model | Any Location | $20,000 |
      | BMW           | Any Model | NSW - Sydney | $15,000 |
      | Honda         | City      | Any Location | $7,500  |
      | Mercedes-Benz | A-Class   | Any Location | $25,000 |
      | Jeep          | Compass   | NSW - Sydney | $20,000 |

