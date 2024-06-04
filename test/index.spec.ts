/**
 * @file index.spec.ts
 * @description This file contains contains unit test cases for index.services.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import express, { Application } from "express";
import { bootstrapServer } from "../src/index";
import { UserController } from "../src/user/controllers/user.controllers";
UserController;
jest.mock("express");
jest.mock("http");
jest.mock("mongoose");
jest.mock("jsonwebtoken");
jest.mock("bcrypt");
jest.mock("../src/common/config/messages");
jest.mock("dotenv/config");
jest.mock("swagger-jsdoc", () => jest.fn());
jest.mock("swagger-ui-express", () => ({
  express: () => ({
    static: jest.fn(),
  }),
  setup: jest.fn(),
}));
jest.mock("body-parser", () => ({
  json: jest.fn(),
}));

jest.mock("express", () => {
  const expressFn: any = jest.fn().mockReturnValue({
    use: jest.fn(),
    json: jest.fn(),
    urlencoded: jest.fn(),
    static: jest.fn(),
    listen: jest.fn(),
  });
  expressFn.json = jest.fn();
  expressFn.urlencoded = jest.fn();
  return expressFn;
});

jest.mock("https", () => ({
  createServer: jest.fn().mockReturnValue({
    listen: jest.fn((port, callback) => {
      callback();
    }),
  }),
}));

jest.mock("../src/common/config/constants", () => ({
  CustomConstant: {
    SWAGGER_OPTIONS: jest.fn(),
  },
}));

jest.mock("../src/user/models/user.model", () => ({
  findOne: () => ({
    exec: jest.fn(),
  }),
  create: () => ({}),
  findOneAndUpdate: () => ({
    exec: () => ({}),
  }),
  deleteOne: jest.fn(),
  updateOne: jest.fn(),
}));

jest.mock("../src/common/utils/mongo-db", () => ({
  DBConnectivity: {
    connectToMongo: jest.fn(() => ({
      connect: jest.fn(),
    })),
  },
}));

// jest.mock("../src/common/utils/shortUUID", () => ({
//   getShortUUID: jest.fn(),
// }));

jest.mock("../src/template/services/template.services", () => ({
  TemplateService: {
    addTest: jest.fn(),
    updateTest: jest.fn(),
    deleteTest: jest.fn(),
    fetchTest: jest.fn(),
  },
}));

jest.mock("../src/template/controllers/template.controllers", () => ({
  TemplateController: {
    testControllerFunction: jest.fn(),
    readTest: jest.fn(),
    removeTest: jest.fn(),
    modifyTest: jest.fn(),
    addNewTest: jest.fn(),
  },
}));

jest.mock("../src/template/routes/template.routes", () => ({
  testRouter: jest.fn(),
}));

jest.mock("../src/user/services/user.services", () => ({
  UserService: {
    addUserToDatabase: jest.fn(),
    removeUserFromDatabase: jest.fn(),
    updateUserFromDatabase: jest.fn(),
    checkUserExists: jest.fn(),
  },
}));

jest.mock("../src/user/controllers/user.controllers", () => ({
  UserController: {
    addUser: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn(),
    loginUser: jest.fn(),
  },
}));

jest.mock("../src/user/routes/user.routes", () => ({
  userRouter: jest.fn(),
}));

describe("bootstrapServer", () => {
  let appMock: Application;
  beforeEach(() => {
    appMock = express();
    (express as any).mockReturnValue(appMock);
  });

  it("should start the server and log the message", () => {
    const result = bootstrapServer();
    expect(result).toBe(undefined);
    expect(express).toHaveBeenCalled();
    expect(appMock.use).toHaveBeenCalled();
    expect(appMock.use).toHaveBeenCalledWith(express.json());
  });
});
