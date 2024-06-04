"use strict";
/**
 * @file template.controller.spec.ts
 * @description This file contains contains unit test cases for  template.controller.spec.ts
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
const template_controllers_1 = require("../../../src/template/controllers/template.controllers");
const format_repsonse_1 = require("../../../src/common/utils/format-repsonse");
const template_services_1 = require("../../../src/template/services/template.services");
jest.mock("../../../src/template/services/template.services", () => ({
    TemplateService: {
        addTest: jest.fn(),
        fetchTest: jest.fn(),
        deleteTest: jest.fn(),
        updateTest: jest.fn(),
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
describe("TemplateController", () => {
    describe("testControllerFunction", () => {
        it("should give success response", () => {
            template_controllers_1.TemplateController.testControllerFunction(req, res);
            expect(res.send).toHaveBeenCalled();
        });
    });
    describe("addNewTest", () => {
        it("it should call addTest and also return 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 200,
                message: "Test added successfully",
                data: { id: "testId", name: "testName" },
                error: null,
            };
            const mockServiceAddTest = jest
                .spyOn(template_services_1.TemplateService, "addTest")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest
                .spyOn(format_repsonse_1.CustomResponse, "sendResponse")
                .mockReturnThis();
            yield template_controllers_1.TemplateController.addNewTest(mockRequest, mockResponse);
            expect(mockServiceAddTest).toHaveBeenCalledWith(mockRequestBody);
            expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(mockResponse, mockServiceResponse.statusCode, mockServiceResponse.message, mockServiceResponse.data, mockServiceResponse.error);
        }));
        it("it should call throw error with 500 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 500,
                message: "Internal Server Error",
                data: [],
                error: "Error",
            };
            const mockServiceAddTest = jest
                .spyOn(template_services_1.TemplateService, "addTest")
                .mockRejectedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield template_controllers_1.TemplateController.addNewTest(mockRequest, mockResponse);
            expect(mockServiceAddTest).toHaveBeenCalledWith(mockRequestBody);
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
    describe("readTest", () => {
        it("should call readTest and give success response with 200 statusCode", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 200,
                message: "Test added successfully",
                data: { id: "testId", name: "testName" },
                error: null,
            };
            const mockServiceReadTest = jest
                .spyOn(template_services_1.TemplateService, "fetchTest")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield template_controllers_1.TemplateController.readTest(mockRequest, mockResponse);
            expect(mockServiceReadTest).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(mockResponse, mockServiceResponse.statusCode, mockServiceResponse.message, mockServiceResponse.data, mockServiceResponse.error);
        }));
        it("should call readTest and give success response with 500 statusCode", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockServiceResponse = {
                statusCode: 500,
                message: "Internal Server Error",
                data: [],
                error: "error",
            };
            const mockServiceReadTest = jest
                .spyOn(template_services_1.TemplateService, "fetchTest")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest
                .spyOn(format_repsonse_1.CustomResponse, "sendResponse")
                .mockReturnValue(mockServiceResponse);
            yield template_controllers_1.TemplateController.readTest(mockRequest, mockResponse);
            expect(mockServiceReadTest).toHaveBeenCalled();
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
                .spyOn(template_services_1.TemplateService, "deleteTest")
                .mockResolvedValue(mockServiceResponse);
            const mockResponse = { status: jest.fn(), send: jest.fn() };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield template_controllers_1.TemplateController.removeTest(mockRequest, mockResponse);
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
                .spyOn(template_services_1.TemplateService, "deleteTest")
                .mockRejectedValue(mockServiceResponse);
            const mockResponse = {
                status: jest.fn(),
                send: jest.fn(),
            };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield template_controllers_1.TemplateController.removeTest(mockRequest, mockResponse);
            expect(mockServiceRemoveTest).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
    describe("modifyTest", () => {
        it("it should give success response after calling modify test", () => __awaiter(void 0, void 0, void 0, function* () {
            jest.clearAllMocks();
            jest.clearAllMocks();
            const mockServiceResponse = {
                statusCode: 500,
                message: "Failed to delete existing test",
                data: [],
                error: "Error",
            };
            jest
                .spyOn(template_services_1.TemplateService, "updateTest")
                .mockRejectedValue(mockServiceResponse);
            const mockResponse = {
                status: jest.fn(),
                send: jest.fn(),
            };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield template_controllers_1.TemplateController.modifyTest(mockRequest, mockResponse);
            //   expect(mockServiceAddTest).toHaveBeenCalled();
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
            template_services_1.TemplateService.updateTest.mockRejectedValueOnce(mockServiceResponse);
            const mockResponse = {
                status: jest.fn(),
                send: jest.fn(),
            };
            const mockCustomResponseSendResponse = jest.spyOn(format_repsonse_1.CustomResponse, "sendResponse");
            yield template_controllers_1.TemplateController.modifyTest(mockRequest, mockResponse);
            //   expect(mockServiceModifyTest).toHaveBeenCalled();
            expect(mockCustomResponseSendResponse).toHaveBeenCalled();
        }));
    });
});
