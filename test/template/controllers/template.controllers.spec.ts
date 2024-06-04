/**
 * @file template.controller.spec.ts
 * @description This file contains contains unit test cases for  template.controller.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import { TemplateController } from "../../../src/template/controllers/template.controllers";
import { CustomResponse } from "../../../src/common/utils/format-repsonse";
import { TemplateService } from "../../../src/template/services/template.services";

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

const req: any = { header: jest.fn(() => null) };
const res: any = { status: jest.fn(() => res), send: jest.fn() };
const mockRequestBody = { name: "testName" };
const mockRequest = { body: mockRequestBody } as any;

describe("TemplateController", () => {
  describe("testControllerFunction", () => {
    it("should give success response", () => {
      TemplateController.testControllerFunction(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe("addNewTest", () => {
    it("it should call addTest and also return 200", async () => {
      const mockServiceResponse = {
        statusCode: 200,
        message: "Test added successfully",
        data: { id: "testId", name: "testName" },
        error: null,
      };

      const mockServiceAddTest = jest
        .spyOn(TemplateService, "addTest")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest
        .spyOn(CustomResponse, "sendResponse")
        .mockReturnThis();

      await TemplateController.addNewTest(mockRequest, mockResponse);

      expect(mockServiceAddTest).toHaveBeenCalledWith(mockRequestBody);

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

      const mockServiceAddTest = jest
        .spyOn(TemplateService, "addTest")
        .mockRejectedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await TemplateController.addNewTest(mockRequest, mockResponse);

      expect(mockServiceAddTest).toHaveBeenCalledWith(mockRequestBody);

      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });

  describe("readTest", () => {
    it("should call readTest and give success response with 200 statusCode", async () => {
      const mockServiceResponse = {
        statusCode: 200,
        message: "Test added successfully",
        data: { id: "testId", name: "testName" },
        error: null,
      };

      const mockServiceReadTest = jest
        .spyOn(TemplateService, "fetchTest")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await TemplateController.readTest(mockRequest, mockResponse);

      expect(mockServiceReadTest).toHaveBeenCalled();

      expect(mockCustomResponseSendResponse).toHaveBeenCalledWith(
        mockResponse,
        mockServiceResponse.statusCode,
        mockServiceResponse.message,
        mockServiceResponse.data,
        mockServiceResponse.error
      );
    });
    it("should call readTest and give success response with 500 statusCode", async () => {
      const mockServiceResponse: any = {
        statusCode: 500,
        message: "Internal Server Error",
        data: [],
        error: "error",
      };

      const mockServiceReadTest = jest
        .spyOn(TemplateService, "fetchTest")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest
        .spyOn(CustomResponse, "sendResponse")
        .mockReturnValue(mockServiceResponse);

      await TemplateController.readTest(mockRequest, mockResponse);

      expect(mockServiceReadTest).toHaveBeenCalled();

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
        .spyOn(TemplateService, "deleteTest")
        .mockResolvedValue(mockServiceResponse);

      const mockResponse = { status: jest.fn(), send: jest.fn() } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await TemplateController.removeTest(mockRequest, mockResponse);

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
        .spyOn(TemplateService, "deleteTest")
        .mockRejectedValue(mockServiceResponse);

      const mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
      } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await TemplateController.removeTest(mockRequest, mockResponse);
      expect(mockServiceRemoveTest).toHaveBeenCalled();
      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });

  describe("modifyTest", () => {
    it("it should give success response after calling modify test", async () => {
      jest.clearAllMocks();

      jest.clearAllMocks();

      const mockServiceResponse = {
        statusCode: 500,
        message: "Failed to delete existing test",
        data: [],
        error: "Error",
      };

      jest
        .spyOn(TemplateService, "updateTest")
        .mockRejectedValue(mockServiceResponse);

      const mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
      } as any;
      const mockCustomResponseSendResponse = jest.spyOn(
        CustomResponse,
        "sendResponse"
      );

      await TemplateController.modifyTest(mockRequest, mockResponse);
      //   expect(mockServiceAddTest).toHaveBeenCalled();
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

      (TemplateService.updateTest as jest.Mock).mockRejectedValueOnce(
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

      await TemplateController.modifyTest(mockRequest, mockResponse);
      //   expect(mockServiceModifyTest).toHaveBeenCalled();
      expect(mockCustomResponseSendResponse).toHaveBeenCalled();
    });
  });
});
