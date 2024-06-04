/**
 * @file template.services.spec.ts
 * @description This file contains contains unit test cases for  template.services.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import { TemplateService } from "../../../src/template/services/template.services";
import { CustomResponse } from "../../../src/common/utils/format-repsonse";

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
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await TemplateService.addTest({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("updateTest", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await TemplateService.updateTest({}, "12asas");
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("deleteTest", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await TemplateService.deleteTest({});
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });

  describe("fetchTest", () => {
    it("should return error response with 500 status code while throwing error from sendSuccessRepsonse", async () => {
      const mockCustomErrorResponse = jest.spyOn(
        CustomResponse,
        "sendErrorResponse"
      );
      await TemplateService.fetchTest();
      expect(mockCustomErrorResponse).toHaveBeenCalled();
    });
  });
});
