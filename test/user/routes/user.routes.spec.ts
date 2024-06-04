/**
 * @file user.routes.spec.ts
 * @description This file contains contains unit test cases for user.routes.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import { CustomConstant } from "../../../src/common/config/constants";
import userRouter from "../../../src/user/routes/user.routes";

jest.mock("express", () => {
  const originalExpress = jest.requireActual("express");
  const mockRouter = () => ({
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  });

  return {
    ...originalExpress,
    Router: jest.fn(mockRouter),
  };
});

jest.mock("../../../src/user/controllers/user.controllers", () => ({
  UserController: {
    addUser: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn(),
    loginUser: jest.fn(),
  },
}));

describe("testRouter", () => {
  it("should call UserController.readTest when GET /template route is hit", async () => {
    const mockRequestHandler = jest.fn();
    await userRouter.get(`${CustomConstant.USER_BASE_URL}`, mockRequestHandler);
  });

  it("should call UserController.login when GET /login route is hit", async () => {
    const mockRequestHandler = jest.fn();
    await userRouter.post(`${CustomConstant.LOGIN_URL}`, mockRequestHandler);
  });
});
