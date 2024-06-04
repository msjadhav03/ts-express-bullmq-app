"use strict";
/**
 * @file template.services.spec.ts
 * @description This file contains contains unit test cases for  template.services.spec.ts
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
const template_services_1 = require("../../../src/template/services/template.services");
const format_repsonse_1 = require("../../../src/common/utils/format-repsonse");
jest.mock("../../../src/common/utils/format-repsonse", () => ({
    CustomResponse: {
        sendSuccessResponse: jest.fn().mockImplementation(() => {
            throw new Error("error");
        }),
        sendErrorResponse: jest.fn(),
    },
}));
describe("TemplateService", () => {
    describe("addTest", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield template_services_1.TemplateService.addTest({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("updateTest", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield template_services_1.TemplateService.updateTest({}, "12asas");
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("deleteTest", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield template_services_1.TemplateService.deleteTest({});
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
    describe("fetchTest", () => {
        it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCustomErrorResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendErrorResponse");
            yield template_services_1.TemplateService.fetchTest();
            expect(mockCustomErrorResponse).toHaveBeenCalled();
        }));
    });
});
