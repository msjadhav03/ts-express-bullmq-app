"use strict";
/**
 * @file user.controller.spec.ts
 * @description This file contains contains unit test cases for  user.controller.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controllers_1 = require("../../../src/user/controllers/user.controllers");
const format_repsonse_1 = require("../../../src/common/utils/format-repsonse");
const user_services_1 = require("../../../src/user/services/user.services");
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
const req = { header: jest.fn(() => null) };
const res = { status: jest.fn(() => res), send: jest.fn() };
const mockRequestBody = { name: "testName" };
const mockRequest = { body: mockRequestBody };
describe("UserController", () => {
    describe("addUser", () => {
        it("it should call addUser and also return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 200,
                message: "Test added successfully",
                data: { id: "testId", name: "testName" },
                error: null,
            };
            const mockAddUserToDatabase = jest
                .spyOn(user_services_1.UserService, "addUserToDatabase")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest
                .spyOn(format_repsonse_1.CustomResponse, "sendResponse")
                .mockReturnThis();
            yield user_controllers_1.UserController.addUser(mockRequest, mockResponse);
            expect(mockAddUserToDatabase).toHaveBeenCalledWith(mockRequestBody);
            expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(mockResponse, mockServiceResponse.statusCode, mockServiceResponse.message, mockServiceResponse.data, mockServiceResponse.error);
        }));
        it("it should call throw error with 500 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 500,
                message: "Internal Server Error",
                data: [],
                error: "Error",
            };
            const mockAddUserToDatabase = jest
                .spyOn(user_services_1.UserService, "addUserToDatabase")
                .mockRejectedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield user_controllers_1.UserController.addUser(mockRequest, mockResponse);
            expect(mockAddUserToDatabase).toHaveBeenCalledWith(mockRequestBody);
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
    describe("loginUser", () => {
        it("should call loginUser and give success response with 200 statusCode", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 200,
                message: "Test added successfully",
                data: { id: "testId", name: "testName" },
                error: null,
            };
            const mockServiceloginUser = jest
                .spyOn(user_services_1.UserService, "checkUserExists")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield user_controllers_1.UserController.loginUser(mockRequest, mockResponse);
            expect(mockServiceloginUser).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(mockResponse, mockServiceResponse.statusCode, mockServiceResponse.message, mockServiceResponse.data, mockServiceResponse.error);
        }));
        it("should call loginUser and give success response with 500 statusCode", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 500,
                message: "Internal Server Error",
                data: [],
                error: "error",
            };
            const mockServiceloginUser = jest
                .spyOn(user_services_1.UserService, "checkUserExists")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest
                .spyOn(format_repsonse_1.CustomResponse, "sendResponse")
                .mockReturnValue(mockServiceResponse);
            yield user_controllers_1.UserController.loginUser(mockRequest, mockResponse);
            expect(mockServiceloginUser).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
    describe("removeTest", () => {
        it("it should call removeTest", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            const mockServiceResponse = {
                statusCode: 200,
                message: "Test added successfully",
                data: [{ id: "testId", name: "testName" }],
                error: null,
            };
            const mockServiceRemoveTest = jest
                .spyOn(user_services_1.UserService, "removeUserFromDatabase")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield user_controllers_1.UserController.deleteUser(mockRequest, mockResponse);
            expect(mockServiceRemoveTest).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(mockResponse, mockServiceResponse.statusCode, mockServiceResponse.message, mockServiceResponse.data, mockServiceResponse.error);
        }));
        it("it should call throw error", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            const mockServiceResponse = {
                statusCode: 500,
                message: "Failed to delete existing test",
                data: [],
                error: "Error",
            };
            const mockServiceRemoveTest = jest
                .spyOn(user_services_1.UserService, "removeUserFromDatabase")
                .mockRejectedValue(mockServiceResponse);
            const mockResponse = {
                status: jest.fn(),
                send: jest.fn(),
            };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield user_controllers_1.UserController.deleteUser(mockRequest, mockResponse);
            expect(mockServiceRemoveTest).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
    describe("updateUser", () => {
        it("it should give success response after calling updateUser", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            jest.clearAllMocks();
            const mockServiceResponse = {
                statusCode: 500,
                message: "Failed to delete existing test",
                data: [],
                error: "Error",
            };
            jest
                .spyOn(user_services_1.UserService, "updateUserFromDatabase")
                .mockRejectedValue(mockServiceResponse);
            const mockResponse = {
                status: jest.fn(),
                send: jest.fn(),
            };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield user_controllers_1.UserController.updateUser(mockRequest, mockResponse);
            //   expect(mockAddUserToDatabase).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
        it("it should give error response after calling modifyTest", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            const mockServiceResponse = {
                statusCode: 500,
                message: "Failed to update existing test",
                data: [],
                error: "Error",
            };
            user_services_1.UserService.updateUserFromDatabase.mockRejectedValueOnce(mockServiceResponse);
            const mockResponse = {
                status: jest.fn(),
                send: jest.fn(),
            };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield user_controllers_1.UserController.updateUser(mockRequest, mockResponse);
            //   expect(mockServiceModifyTest).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
});
