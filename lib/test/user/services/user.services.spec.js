"use strict";
/**
 * @file user.services.spec.ts
 * @description This file contains contains unit test cases for user.services.ts
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
const user_services_1 = require("../../../src/user/services/user.services");
const format_repsonse_1 = require("../../../src/common/utils/format-repsonse");
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
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield user_services_1.UserService.addUserToDatabase({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("removeUserFromDatabase", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield user_services_1.UserService.removeUserFromDatabase({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("removeUserFromDatabase", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield user_services_1.UserService.removeUserFromDatabase({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("updateUserFromDatabase", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield user_services_1.UserService.updateUserFromDatabase({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("checkUserExists", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield user_services_1.UserService.checkUserExists({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("fetchUser", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield user_services_1.UserService.getAllUserList();
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
});
