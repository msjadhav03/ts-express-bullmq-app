/**
 * @file user.services.spec.ts
 * @description This file contains contains unit test cases for user.services.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import { UserService } from "../../../src/user/services/user.services";
import { CustomResponse } from "../../../src/common/utils/format-repsonse";
import User from "../../../src/user/models/user.model";
import bcrypt from "bcrypt";

jest.mock("bcrypt", () => ({
  hash: jest.fn().mockResolvedValue("some hash"),
  compareSync: jest.fn(() => {
    return undefined;
  }),
}));

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn().mockResolvedValue("some value"),
}));

jest.mock("../../../src/common/utils/format-repsonse", () => ({
  CustomResponse: {
    sendSuccessResponse: jest.fn().mockImplementation(() => {
      throw new Error("error");
    }),
    sendErrorResponse: jest.fn(),
  },
}));

jest.mock("../../../src/user/models/user.model", () => ({
  findOne: jest.fn(),
  create: () => ({}),
  findOneAndUpdate: () => ({
    exec: () => ({}),
  }),
  findOneAndDelete: jest.fn(),
  deleteOne: jest.fn(),
  updateOne: jest.fn(),
  save: jest.fn(),
}));

describe("UserService", () => {
  describe("addUserToDatabase", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await UserService.addUserToDatabase({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("removeUserFromDatabase", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await UserService.removeUserFromDatabase({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("removeUserFromDatabase", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await UserService.removeUserFromDatabase({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("updateUserFromDatabase", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await UserService.updateUserFromDatabase({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("checkUserExists", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      jest.clearAllMocks();
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await UserService.checkUserExists({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("fetchUser", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await UserService.getAllUserList();
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });
});
