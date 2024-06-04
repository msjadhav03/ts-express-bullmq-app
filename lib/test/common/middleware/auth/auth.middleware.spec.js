"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file auth.middleware.spec.ts
 * @description This file contains contains unit test cases for auth.middleware.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
const auth_middleware_1 = require("../../../../src/common/middleware/auth/auth.middleware");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
process.env.JWT_SECRET = "test_secret";
const next = jest.fn();
jest.mock("jsonwebtoken", () => ({
    verify: jest.fn(),
}));
describe("Auth Middleware", () => {
    describe("authenticateUser", () => {
        it("should return 401 if no token provided", () => {
            const req = { header: jest.fn(() => null) };
            const res = { status: jest.fn(() => res), send: jest.fn() };
            auth_middleware_1.Auth.authenticateUser(req, res, next);
            expect(res.status).toHaveBeenCalledWith(401);
            expect(res.send).toHaveBeenCalledWith({
                statusCode: 401,
                message: "Unauthorized user access",
                data: [],
                error: undefined,
            });
            expect(next).not.toHaveBeenCalled();
        });
        it("should return 403 if token is invalid", () => {
            const req = { header: jest.fn(() => "Bearer invalid_token") };
            const res = { status: jest.fn(() => res), send: jest.fn() };
            jsonwebtoken_1.default.verify = jest.fn(() => {
                throw new Error("Invalid token");
            });
            auth_middleware_1.Auth.authenticateUser(req, res, next);
            expect(res.status).toHaveBeenCalledWith(403);
            expect(res.send).toHaveBeenCalledWith({
                statusCode: 403,
                message: "Forbidden: insufficient access",
                data: [],
                error: undefined,
            });
            expect(next).not.toHaveBeenCalled();
        });
        it("should set user in request object if token is valid", () => {
            const req = { header: jest.fn(() => "Bearer valid_token"), user: {} };
            const res = {};
            jsonwebtoken_1.default.verify = jest.fn();
            auth_middleware_1.Auth.authenticateUser(req, res, next);
            expect(req.user).toEqual(undefined);
            expect(next).toHaveBeenCalled();
        });
    });
    describe("authorizeUser", () => {
        it("should call next without any restrictions", () => {
            const req = {};
            const res = {};
            auth_middleware_1.Auth.authorizeUser(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
