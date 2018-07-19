$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/GitHubLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Git Hub Login Feature",
  "description": "",
  "id": "git-hub-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 12,
      "id": "git-hub-login-feature;login-scenario;;1"
    },
    {
      "cells": [
        "sathishpasupathi",
        "P@ssw0rd",
        "Git Hub"
      ],
      "line": 13,
      "id": "git-hub-login-feature;login-scenario;;2"
    },
    {
      "cells": [
        "sathishpasupathi",
        "abcd",
        "Sign In Git Hub"
      ],
      "line": 14,
      "id": "git-hub-login-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 9102707971,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters sathishpasupathi as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters P@ssw0rd as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Navigates to Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sathishpasupathi",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_sathishpasupathi_as_username(String)"
});
formatter.result({
  "duration": 164617977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssw0rd",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_abcd_as_password(String)"
});
formatter.result({
  "duration": 155755783,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Clicks_on_SignIn()"
});
formatter.result({
  "duration": 2050342824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_Git_Hub(String)"
});
formatter.result({
  "duration": 204006432,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "The URL of Git Hub",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.the_URL_of_Git_Hub()"
});
formatter.result({
  "duration": 9150725276,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Scenario",
  "description": "",
  "id": "git-hub-login-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User enters sathishpasupathi as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters abcd as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Navigates to Sign In Git Hub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "sathishpasupathi",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_sathishpasupathi_as_username(String)"
});
formatter.result({
  "duration": 107210620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 12
    }
  ],
  "location": "Stepdefs.user_enters_abcd_as_password(String)"
});
formatter.result({
  "duration": 75608631,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.user_Clicks_on_SignIn()"
});
formatter.result({
  "duration": 1043080816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign In Git Hub",
      "offset": 18
    }
  ],
  "location": "Stepdefs.user_Navigates_to_Git_Hub(String)"
});
formatter.result({
  "duration": 88120520,
  "status": "passed"
});
});