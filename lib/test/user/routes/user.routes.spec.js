"use strict";
/**
 * @file user.routes.spec.ts
 * @description This file contains contains unit test cases for user.routes.spec.ts
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../src/common/config/constants");
const user_routes_1 = __importDefault(require("../../../src/user/routes/user.routes"));
jest.mock("express", () => {
    const originalExpress = jest.requireActual("express");
    const mockRouter = () => ({
        get: jest.fn(),
        post: jest.fn(),
        patch: jest.fn(),
        delete: jest.fn(),
    });
    return Object.assign(Object.assign({}, originalExpress), { Router: jest.fn(mockRouter) });
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
    it("should call UserController.readTest when GET /template route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRequestHandler = jest.fn();
        yield user_routes_1.default.get(`${constants_1.CustomConstant.USER_BASE_URL}`, mockRequestHandler);
    }));
    it("should call UserController.login when GET /login route is hit", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRequestHandler = jest.fn();
        yield user_routes_1.default.post(`${constants_1.CustomConstant.LOGIN_URL}`, mockRequestHandler);
    }));
});
