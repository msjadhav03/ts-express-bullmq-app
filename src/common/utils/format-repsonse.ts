/**
 * @file format-response.ts
 * @description This file contains code to format and send response
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */

import { Response } from "express";
import { StatusCode } from "../config/status-codes";
import { CustomMessage } from "../config/messages";
import { responseType } from "../config/types";

export class CustomResponse {
  /**
   * @function sendResponse
   * @param res
   * @param statusCode
   * @param message
   * @param data
   * @param error
   * @returns Formatted response
   * @author Manisha Jadhav
   */
  static sendResponse = async (
    res: Response,
    statusCode: number,
    message: string,
    data: any,
    error?: any
  ) => {
    try {
      if (!error) {
        return res.status(statusCode).send({
          statusCode,
          message,
          data,
        });
      }
      return res.status(statusCode).send({
        statusCode,
        message,
        error,
        data: [],
      });
    } catch (error) {
      return res.status(StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        message:
          CustomMessage.MESSAGES.ERROR_OCCURED_WHILE_FORMULATING_RESPONSE,
        error: error,
      });
    }
  };

  /**
   * @function: sendErrorResponse
   * @description: Service function to format error reponse
   * @param: [message] Error message
   * @param: [error] Actual error
   * @returns: formatted error response
   */
  static sendErrorResponse = (
    statusCode: number,
    message: string,
    error: any
  ): responseType => {
    return {
      statusCode,
      message: message,
      error: error.toString(),
    };
  };

  /**
   * @function: sendSuccessResponse
   * @description: Service function to formatted success reponse
   * @param: [statusCode] status code of the response to be sent
   * @param: [message] message of the success response
   * @param: [data] data to be send in reponse
   * @returns: formatted success response
   */
  static sendSuccessResponse = (
    statusCode: number,
    message: string,
    data: any
  ): responseType => {
    return {
      statusCode,
      message,
      data,
    };
  };
}
