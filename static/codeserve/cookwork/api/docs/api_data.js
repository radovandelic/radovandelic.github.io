define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User <code>access_token</code> to be passed to other requests.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Current user's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid credentials.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/facebook",
    "title": "Authenticate with Facebook",
    "name": "AuthenticateFacebook",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook user accessToken.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User <code>access_token</code> to be passed to other requests.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Current user's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid credentials.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/infos",
    "title": "Create info",
    "name": "CreateInfo",
    "group": "Info",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>User's activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "purpose",
            "description": "<p>User's renting purpose.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>User's target region.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>User's phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>User's target kitchen type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateFrom",
            "description": "<p>User's dateFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateTo",
            "description": "<p>User's dateTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "daysFrom",
            "description": "<p>User's daysFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "daysTo",
            "description": "<p>User's daysTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hoursFrom",
            "description": "<p>User's hoursFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hoursTo",
            "description": "<p>User's hoursTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comments",
            "description": "<p>User's comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Info's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Info not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/info/index.js",
    "groupTitle": "Info"
  },
  {
    "type": "delete",
    "url": "/infos/:id",
    "title": "Delete info",
    "name": "DeleteInfo",
    "group": "Info",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Info not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/info/index.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/infos/:id",
    "title": "Retrieve info",
    "name": "RetrieveInfo",
    "group": "Info",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "info",
            "description": "<p>Info's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Info not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/info/index.js",
    "groupTitle": "Info"
  },
  {
    "type": "get",
    "url": "/infos",
    "title": "Retrieve infos",
    "name": "RetrieveInfos",
    "group": "Info",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of infos.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of infos.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/info/index.js",
    "groupTitle": "Info"
  },
  {
    "type": "post",
    "url": "/kitchens",
    "title": "Create kitchen",
    "name": "CreateKitchen",
    "group": "Kitchen",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Kitchen's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Kitchen's phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Kitchen's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Kitchen's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Kitchen's address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Kitchen's region.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Kitchen's postal code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Kitchen's size.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "AFSCA",
            "description": "<p>Kitchen's AFSCA.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VAT",
            "description": "<p>Kitchen's VAT.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "days",
            "description": "<p>Kitchen's working weekdays. (e.g {daysFrom: 1, daysTo: 0})</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "hours",
            "description": "<p>Kitchen's work hours. (e.g {hoursFrom: 0, hoursTo: 24})</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "capacity",
            "description": "<p>Kitchen's capacity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Kitchen's hourly price, excl. service fee and VAT.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rent",
            "description": "<p>Kitchen's monthly price, excl. service fee and VAT.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "equipment",
            "description": "<p>Kitchen's equipment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "staff",
            "description": "<p>Kitchen's additional services.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cancellation",
            "description": "<p>Kitchen's cancellation policy.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "events",
            "description": "<p>Kitchen's events.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "standingCapacity",
            "description": "<p>Kitchen's standing capacity for events.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sittingCapacity",
            "description": "<p>Kitchen's sitting capacity for events.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Kitchen's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "post",
    "url": "/kitchens/:id/images/delete",
    "title": "Delete kitchen image(s)",
    "name": "DeleteImages",
    "group": "Kitchen",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "images",
            "description": "<p>Image(s) to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Kitchen's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "delete",
    "url": "/kitchens/:id",
    "title": "Delete kitchen",
    "name": "DeleteKitchen",
    "group": "Kitchen",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "post",
    "url": "/kitchens/user/:userid",
    "title": "Find kitcher by user id",
    "name": "FindByUser",
    "group": "Kitchen",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Kitchen's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "get",
    "url": "/kitchens/:id",
    "title": "Retrieve kitchen",
    "name": "RetrieveKitchen",
    "group": "Kitchen",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>user access token for full view.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Kitchen's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "get",
    "url": "/kitchens",
    "title": "Retrieve kitchens",
    "name": "RetrieveKitchens",
    "group": "Kitchen",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "description": "<p>kitchen verification status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>kitchen region.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>kitchen type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of kitchens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of kitchens.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "put",
    "url": "/kitchens/:id",
    "title": "Update kitchen",
    "name": "UpdateKitchen",
    "group": "Kitchen",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Kitchen's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Kitchen's phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Kitchen's description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Kitchen's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Kitchen's address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>Kitchen's region.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Kitchen's postal code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Kitchen's size.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "AFSCA",
            "description": "<p>Kitchen's AFSCA.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VAT",
            "description": "<p>Kitchen's VAT.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "days",
            "description": "<p>Kitchen's working weekdays. (e.g {daysFrom: 1, daysTo: 0})</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "hours",
            "description": "<p>Kitchen's work hours. (e.g {hoursFrom: 0, hoursTo: 24})</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "capacity",
            "description": "<p>Kitchen's capacity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Kitchen's hourly price, excl. service fee and VAT.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "rent",
            "description": "<p>Kitchen's monthly price, excl. service fee and VAT.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "equipment",
            "description": "<p>Kitchen's equipment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "staff",
            "description": "<p>Kitchen's additional services.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cancellation",
            "description": "<p>Kitchen's cancellation policy.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "events",
            "description": "<p>Kitchen's events.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "standingCapacity",
            "description": "<p>Kitchen's standing capacity for events.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sittingCapacity",
            "description": "<p>Kitchen's sitting capacity for events.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "verified",
            "description": "<p>Kitchen's verification status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Kitchen's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "post",
    "url": "/kitchens/:id/images/upload",
    "title": "Upload kitchen image",
    "name": "UploadImage",
    "group": "Kitchen",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image to be added (data-uri).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Kitchen's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Kitchen not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/kitchen/index.js",
    "groupTitle": "Kitchen"
  },
  {
    "type": "post",
    "url": "/orders",
    "title": "Create order",
    "name": "CreateOrder",
    "group": "Order",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"once\"",
              "\"recurring\"",
              "\"long\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Order's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateFrom",
            "description": "<p>Order's dateFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateTo",
            "description": "<p>Order's dateTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "daysFrom",
            "description": "<p>Order's daysFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "daysTo",
            "description": "<p>Order's daysTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hoursFrom",
            "description": "<p>Order's hoursFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hoursTo",
            "description": "<p>Order's hoursTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "totalDays",
            "description": "<p>Order's totalDays.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "totalHours",
            "description": "<p>Order's totalHours.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "totalPrice",
            "description": "<p>Order's totalPrice.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Order's kitchen.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "order",
            "description": "<p>Order's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Order not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/order/index.js",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/orders/:id",
    "title": "Delete order",
    "name": "DeleteOrder",
    "group": "Order",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Order not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/order/index.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/orders/:id",
    "title": "Retrieve order",
    "name": "RetrieveOrder",
    "group": "Order",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "order",
            "description": "<p>Order's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Order not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/order/index.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/orders",
    "title": "Retrieve orders",
    "name": "RetrieveOrders",
    "group": "Order",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total amount of orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of orders.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/order/index.js",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/orders/:id",
    "title": "Update order",
    "name": "UpdateOrder",
    "group": "Order",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"once\"",
              "\"recurring\"",
              "\"long\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Order's type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateFrom",
            "description": "<p>Order's dateFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "dateTo",
            "description": "<p>Order's dateTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "daysFrom",
            "description": "<p>Order's daysFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "daysTo",
            "description": "<p>Order's daysTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hoursFrom",
            "description": "<p>Order's hoursFrom.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "hoursTo",
            "description": "<p>Order's hoursTo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "totalDays",
            "description": "<p>Order's totalDays.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "totalHours",
            "description": "<p>Order's totalHours.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "totalPrice",
            "description": "<p>Order's totalPrice.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "kitchen",
            "description": "<p>Order's kitchen.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "order",
            "description": "<p>Order's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Order not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/order/index.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/password-resets",
    "title": "Send email",
    "name": "SendPasswordReset",
    "group": "PasswordReset",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address to receive the password reset token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link to redirect user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 202": [
          {
            "group": "Success 202",
            "optional": false,
            "field": "202",
            "description": "<p>Accepted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "put",
    "url": "/password-resets/:token",
    "title": "Submit password",
    "name": "SubmitPasswordReset",
    "group": "PasswordReset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Token has expired or doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "get",
    "url": "/password-resets/:token",
    "title": "Verify token",
    "name": "VerifyPasswordReset",
    "group": "PasswordReset",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Password reset token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Token has expired or doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>User's phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "kitchenOwner",
            "defaultValue": "false",
            "description": "<p>User is kitchen owner or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>User's role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "fr",
            "description": "<p>User's language preference.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 201": [
          {
            "group": "Sucess 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Email already registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>User's phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "kitchenOwner",
            "defaultValue": "false",
            "description": "<p>User is kitchen owner or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "fr",
            "description": "<p>User's language preference.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 201": [
          {
            "group": "Sucess 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Email already registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Retrieve current user",
    "name": "RetrieveCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Retrieve user",
    "name": "RetrieveUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve users",
    "name": "RetrieveUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id/password",
    "title": "Update password",
    "name": "UpdatePassword",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>User's phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "region",
            "description": "<p>User's home region.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "activity",
            "description": "<p>User's professional activity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "kitchenOwner",
            "description": "<p>User is kitchen owner or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "description": "<p>User's language preference.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/:token",
    "title": "Verify user account",
    "name": "VerifyUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User or verification token not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  }
] });
