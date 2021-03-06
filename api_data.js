define({ "api": [
  {
    "type": "post",
    "url": "/auth/sign-in",
    "title": "Sign in",
    "name": "Authenticate",
    "group": "Auth",
    "permission": [
      {
        "name": "master"
      }
    ],
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
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
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
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/sign-out",
    "title": "Sign out",
    "name": "Sign_Out",
    "group": "Auth",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 200": [
          {
            "group": "Sucess 200",
            "type": "Object",
            "optional": false,
            "field": "status:",
            "description": "<ol start=\"200\"> <li></li> </ol>"
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
    "url": "/admin/exercises",
    "title": "Create exercise",
    "name": "CreateExercise",
    "group": "Exercise",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
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
            "optional": false,
            "field": "name",
            "description": "<p>(exercise name).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sets",
            "description": "<p>(number of sets).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>(counts per set).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 200": [
          {
            "group": "Sucess 200",
            "type": "Object",
            "optional": false,
            "field": "Exercise",
            "description": "<p>'s data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/admin/exercises/index.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "delete",
    "url": "/admin/exercises/:id",
    "title": "Delete exercise",
    "name": "DeleteExercise",
    "group": "Exercise",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(exercise id).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 200": [
          {
            "group": "Sucess 200",
            "optional": false,
            "field": "Deleted.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/admin/exercises/index.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "get",
    "url": "/exercises",
    "title": "Retrieve all exercises",
    "name": "RetrieveAllExercises",
    "group": "Exercise",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
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
            "field": "All",
            "description": "<p>Exercise.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/exercises/index.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "get",
    "url": "/exercises/:id",
    "title": "Retrieve single exercise",
    "name": "RetrieveSingleExercise",
    "group": "Exercise",
    "permission": [
      {
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
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
            "field": "Exercise",
            "description": "<p>'s data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/exercises/index.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "put",
    "url": "/admin/exercises/:id",
    "title": "Update exercise",
    "name": "UpdateExercise",
    "group": "Exercise",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(exercise id).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(exercise name).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sets",
            "description": "<p>(number of sets).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>(counts per set).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 200": [
          {
            "group": "Sucess 200",
            "type": "Object",
            "optional": false,
            "field": "Exercise",
            "description": "<p>'s data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/admin/exercises/index.js",
    "groupTitle": "Exercise"
  },
  {
    "type": "post",
    "url": "/users/change-password",
    "title": "Change password",
    "name": "ChangePassword",
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
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
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
            "field": "status:",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register user",
    "name": "RegisterUser",
    "group": "User",
    "permission": [
      {
        "name": "master"
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
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
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
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
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
    "filename": "src/api/users/index.js",
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
        "name": "user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token.</p>"
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
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 200": [
          {
            "group": "Sucess 200",
            "type": "Object",
            "optional": false,
            "field": "status:",
            "description": "<ol start=\"200\"> <li></li> </ol>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/users/index.js",
    "groupTitle": "User"
  }
] });
