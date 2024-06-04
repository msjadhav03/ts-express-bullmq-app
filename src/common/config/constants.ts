/**
 * @file constants.ts
 * @description This file contains a constant from all over the code
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

require("dotenv").config({ path: process.env.PWD + "/.env" });

const { SWAGGER_URL } = process.env;

export class CustomConstant {
  static SWAGGER_CONFIG = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Template for Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger template",
        contact: {
          name: "Manisha Jadhav",
        },
      },
      servers: [
        {
          url: `${SWAGGER_URL}`,
        },
      ],
      security: [
        {
          AuthToken: [], // Global security definition
        },
      ],
      components: {
        securitySchemes: {
          AuthToken: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "The token for authentication",
          },
        },
      },
    },
    apis: ["./lib/src/template/routes/*.js", "./lib/src/user/routes/*.js"],
  };

  static SWAGGER_UI_OPTIONS = {
    customCss: `
    body {
      background-color: #d8e1f0; 
    }
  `,
  };

  static SWAGGER_BASE_URI = "/docs";
  static TEMPLATE_BASE_URL = "/template";
  static USER_BASE_URL = "/user";
  static LOGIN_URL = "/login";
}
