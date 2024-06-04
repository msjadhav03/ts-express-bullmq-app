/**
 * @file format-repsonse.spec.ts
 * @description This file contains contains unit test cases for format-repsonse.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import { Response } from "express";
import { CustomResponse } from "../../../src/common/utils/format-repsonse";

const mockResponse = (): Response => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe("CustomResponse", () => {
  describe("sendResponse", () => {
    it("should send a success response", async () => {
      const res = mockResponse();
      const statusCode = 200;
      const message = "Success";
      const data = { id: 1, name: "John" };

      await CustomResponse.sendResponse(res, statusCode, message, data);

      expect(res.status).toHaveBeenCalledWith(statusCode);
      expect(res.send).toHaveBeenCalledWith({
        statusCode,
        message,
        data,
      });
    });

    it("should send an error response", async () => {
      const res = mockResponse();
      const statusCode = 500;
      const message = "Internal Server Error";
      const error = new Error("Something went wrong");

      await CustomResponse.sendResponse(res, statusCode, message, null, error);

      expect(res.status).toHaveBeenCalledWith(statusCode);
      expect(res.send).toHaveBeenCalledWith({
        statusCode,
        message,
        error,
        data: [],
      });
    });
  });
  describe("sendErrorResponse", () => {
    it("should format an error response", () => {
      const statusCode = 400;
      const message = "Bad Request";
      const error = new Error("Invalid request");

      const response = CustomResponse.sendErrorResponse(
        statusCode,
        message,
        error
      );

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

      const response = CustomResponse.sendSuccessResponse(
        statusCode,
        message,
        data
      );

      expect(response).toEqual({
        statusCode,
        message,
        data,
      });
    });
  });
});
