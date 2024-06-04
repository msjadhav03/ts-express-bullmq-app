/**
 * @file user.controller.spec.ts
 * @description This file contains contains unit test cases for  user.controller.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import { UserController } from "../../../src/user/controllers/user.controllers";
import { CustomResponse } from "../../../src/common/utils/format-repsonse";
import { UserService } from "../../../src/user/services/user.services";

jest.mock("../../../src/user/services/user.services", () => ({
  UserService: {
    addUserToDatabase: jest.fn(),
    removeUserFromDatabase: jest.fn(),
    updateUserFromDatabase: jest.fn(),
    checkUserExists: jest.fn(),
  },
}));

jest.mock("../../../src/common/utils/format-repsonse", () => ({
  CustomResponse: {
    sendResponse: jest.fn(),
    sendErrorResponse: jest.fn(),
    sendSuccessResponse: jest.fn(),
  },
}));

const req: any = { header: jest.fn(() => null) };
const res: any = { status: jest.fn(() => res), send: jest.fn() };
const mockRequestBody = { name: "testName" };
const mockRequest = { body: mockRequestBody } as any;

describe("UserController", () => {
  describe("addUser", () => {
    it("it should call addUser and also return 200", async () => {
      const mockServiceResponse = {
        statusCode: 200,
        message: "Test added successfully",
        data: { id: "testId", name: "testName" },
        error: null,
      };

      const mockAddUserToDatabase = jest
        .spyOn(UserService, "addUserToDatabase")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest
        .spyOn(CustomResponse, "sendResponse")
        .mockReturnThis();

      await UserController.addUser(mockRequest, mockResponse);

      expect(mockAddUserToDatabase).toHaveBeenCalledWith(mockRequestBody);

      expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(
        mockResponse,
        mockServiceResponse.statusCode,
        mockServiceResponse.message,
        mockServiceResponse.data,
        mockServiceResponse.error
      );
    });
    it("it should call throw error with 500 status code", async () => {
      const mockServiceResponse = {
        statusCode: 500,
        message: "Internal Server Error",
        data: [],
        error: "Error",
      };

      const mockAddUserToDatabase = jest
        .spyOn(UserService, "addUserToDatabase")
        .mockRejectedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await UserController.addUser(mockRequest, mockResponse);

      expect(mockAddUserToDatabase).toHaveBeenCalledWith(mockRequestBody);

      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });

  describe("loginUser", () => {
    it("should call loginUser and give success response with 200 statusCode", async () => {
      const mockServiceResponse = {
        statusCode: 200,
        message: "Test added successfully",
        data: { id: "testId", name: "testName" },
        error: null,
      };

      const mockServiceloginUser = jest
        .spyOn(UserService, "checkUserExists")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await UserController.loginUser(mockRequest, mockResponse);

      expect(mockServiceloginUser).toHaveBeenCalled();

      expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(
        mockResponse,
        mockServiceResponse.statusCode,
        mockServiceResponse.message,
        mockServiceResponse.data,
        mockServiceResponse.error
      );
    });
    it("should call loginUser and give success response with 500 statusCode", async () => {
      const mockServiceResponse: any = {
        statusCode: 500,
        message: "Internal Server Error",
        data: [],
        error: "error",
      };

      const mockServiceloginUser = jest
        .spyOn(UserService, "checkUserExists")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest
        .spyOn(CustomResponse, "sendResponse")
        .mockReturnValue(mockServiceResponse);

      await UserController.loginUser(mockRequest, mockResponse);

      expect(mockServiceloginUser).toHaveBeenCalled();

      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });

  describe("removeTest", () => {
    it("it should call removeTest", async () => {
      jest.clearAllMocks();

      const mockServiceResponse = {
        statusCode: 200,
        message: "Test added successfully",
        data: [{ id: "testId", name: "testName" }],
        error: null,
      };

      const mockServiceRemoveTest = jest
        .spyOn(UserService, "removeUserFromDatabase")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await UserController.deleteUser(mockRequest, mockResponse);

      expect(mockServiceRemoveTest).toHaveBeenCalled();

      expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(
        mockResponse,
        mockServiceResponse.statusCode,
        mockServiceResponse.message,
        mockServiceResponse.data,
        mockServiceResponse.error
      );
    });
    it("it should call throw error", async () => {
      jest.clearAllMocks();

      const mockServiceResponse = {
        statusCode: 500,
        message: "Failed to delete existing test",
        data: [],
        error: "Error",
      };

      const mockServiceRemoveTest = jest
        .spyOn(UserService, "removeUserFromDatabase")
        .mockRejectedValue(mockServiceResponse);

      const mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
      } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await UserController.deleteUser(mockRequest, mockResponse);
      expect(mockServiceRemoveTest).toHaveBeenCalled();
      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });

  describe("updateUser", () => {
    it("it should give success response after calling updateUser", async () => {
      jest.clearAllMocks();

      jest.clearAllMocks();

      const mockServiceResponse = {
        statusCode: 500,
        message: "Failed to delete existing test",
        data: [],
        error: "Error",
      };

      jest
        .spyOn(UserService, "updateUserFromDatabase")
        .mockRejectedValue(mockServiceResponse);

      const mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
      } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await UserController.updateUser(mockRequest, mockResponse);
      //   expect(mockAddUserToDatabase).toHaveBeenCalled();
      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
    it("it should give error response after calling modifyTest", async () => {
      jest.clearAllMocks();

      const mockServiceResponse = {
        statusCode: 500,
        message: "Failed to update existing test",
        data: [],
        error: "Error",
      };

      (UserService.updateUserFromDatabase as jest.Mock).mockRejectedValueOnce(
        mockServiceResponse
      );
      const mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
      } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await UserController.updateUser(mockRequest, mockResponse);
      //   expect(mockServiceModifyTest).toHaveBeenCalled();
      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });
});
