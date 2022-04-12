$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Alfa Romeo",
        "147",
        "ACT - All",
        "$30,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Audi",
        "Q3",
        "ACT - All",
        "$40,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "Any Model",
        "NSW - Sydney",
        "$50,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "Any Location",
        "$60,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "A-Class",
        "Any Location",
        "$100,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "NSW - Sydney",
        "$90,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10362982000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Alfa Romeo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"147\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Alfa Romeo\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 277787100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "buySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 524264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "buySteps.iClickLink(String)"
});
formatter.result({
  "duration": 231738300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 809949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 1904756800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "147",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 163569700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 134882100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 210266200,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4758939900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alfa Romeo",
      "offset": 23
    }
  ],
  "location": "buySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 389752900,
  "status": "passed"
});
formatter.after({
  "duration": 1075219400,
  "status": "passed"
});
formatter.before({
  "duration": 6681106600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Q3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 94100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "buySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 550095400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "buySteps.iClickLink(String)"
});
formatter.result({
  "duration": 258324700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 1688242300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 436850600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q3",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 147521500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 128279700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 140757100,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 233965100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "buySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 509713200,
  "status": "passed"
});
formatter.after({
  "duration": 1035732600,
  "status": "passed"
});
formatter.before({
  "duration": 6138198900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Any Model\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "buySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 390872200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "buySteps.iClickLink(String)"
});
formatter.result({
  "duration": 273041300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 946605800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2172529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Model",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 108082400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 134205100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 126075900,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6967593900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "buySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 355460500,
  "status": "passed"
});
formatter.after({
  "duration": 1022448000,
  "status": "passed"
});
formatter.before({
  "duration": 5861729000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 213900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "buySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 459896500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "buySteps.iClickLink(String)"
});
formatter.result({
  "duration": 287858500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 806579300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2098020600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 200340100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 87035500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 131326100,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 194306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "buySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 5189201600,
  "status": "passed"
});
formatter.after({
  "duration": 1012727200,
  "status": "passed"
});
formatter.before({
  "duration": 5833468200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"A-Class\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Mercedes-Benz\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "buySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 345528500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "buySteps.iClickLink(String)"
});
formatter.result({
  "duration": 302471000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 836877000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 2005008300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A-Class",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 179689800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 81275900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 162465500,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 16056799000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "buySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 403897800,
  "status": "passed"
});
formatter.after({
  "duration": 1105506400,
  "status": "passed"
});
formatter.before({
  "duration": 6524567800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"New \u0026 Used Car Search - carsguide\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select model \"Compass\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 73100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "buySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 373152300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "buySteps.iClickLink(String)"
});
formatter.result({
  "duration": 255168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search - carsguide",
      "offset": 15
    }
  ],
  "location": "buySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 2350257500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "buySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 438158300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 126204600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "buySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 122292200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "buySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 160449100,
  "status": "passed"
});
formatter.match({
  "location": "buySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5615445100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "buySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 330095100,
  "status": "passed"
});
formatter.after({
  "duration": 1044650700,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 2,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6598916700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \u003cdealersName\u003e are display on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 10
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 11
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 12
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 13
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 14
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 15
    },
    {
      "cells": [
        "ANDREA MOTOR SERVICE"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "buySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 82700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 973112900,
  "status": "passed"
});
});