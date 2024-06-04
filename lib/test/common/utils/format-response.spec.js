"use strict";
/**
 * @file format-repsonse.spec.ts
 * @description This file contains contains unit test cases for format-repsonse.spec.ts
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
const format_repsonse_1 = require("../../../src/common/utils/format-repsonse");
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
describe("CustomResponse", () => {
    describe("sendResponse", () => {
        it("should send a success response", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = mockResponse();
            const statusCode = 200;
            const message = "Success";
            const data = { id: 1, name: "John" };
            yield format_repsonse_1.CustomResponse.sendResponse(res, statusCode, message, data);
            expect(res.status).toHaveBeenCalledWith(statusCode);
            expect(res.send).toHaveBeenCalledWith({
                statusCode,
                message,
                data,
            });
        }));
        it("should send an error response", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = mockResponse();
            const statusCode = 500;
            const message = "Internal Server Error";
            const error = new Error("Something went wrong");
            yield format_repsonse_1.CustomResponse.sendResponse(res, statusCode, message, null, error);
            expect(res.status).toHaveBeenCalledWith(statusCode);
            expect(res.send).toHaveBeenCalledWith({
                statusCode,
                message,
                error,
                data: [],
            });
        }));
    });
    describe("sendErrorResponse", () => {
        it("should format an error response", () => {
            const statusCode = 400;
            const message = "Bad Request";
            const error = new Error("Invalid request");
            const response = format_repsonse_1.CustomResponse.sendErrorResponse(statusCode, message, error);
            expect(response).toEqual({
                statusCode,
                message,
                error: error.toString(),
            });
        });
    });
    describe("sendSuccessResponse", () => {
        it("should format a success response", () => {
            const statusCode = 200;
            const message = "Success";
            const data = { id: 1, name: "John" };
            const response = format_repsonse_1.CustomResponse.sendSuccessResponse(statusCode, message, data);
            expect(response).toEqual({
                statusCode,
                message,
                data,
            });
        });
    });
});
