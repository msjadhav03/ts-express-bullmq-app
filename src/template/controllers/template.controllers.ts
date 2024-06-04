/**
 * @file test.controller.ts
 * @description This file contains controller level code test module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */

import { Request, Response } from "express";
import { StatusCode } from "../../common/config/status-codes";
import { CustomMessage } from "../../common/config/messages";
import { TemplateService } from "../services/template.services";
import { CustomResponse } from "../../common/utils/format-repsonse";
import { responseType } from "../../common/config/types";

export class TemplateController {
  /**
   * @function: testControllerFunction
   * @param: [req] Request object
   * @param: [res] Response object
   * @returns: response success or Error
   * @author: Manisha Jadhav
   */

  static testControllerFunction = async (req: Request, res: Response) => {
    try {
      return res.send({
        statusCode: 200,
        message: "Success true",
        data: [req.body],
      });
    } catch (error) {
      res.send({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  };

  /**
   * @function: addNewTest
   * @description: Controller function to add test data
   * @param: [req] Request object
   * @param: [res] Response object
   * @returns: Success Response or Error Response
   * @author: Manisha Jadhav
   */
  static addNewTest = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: responseType = await TemplateService.addTest(
        req.body as object
      );
      return CustomResponse.sendResponse(
        res,
        response.statusCode,
        response.message,
        response.data,
        response.error
      );
    } catch (error: any) {
      return CustomResponse.sendResponse(
        res,
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_CREATE,
        [],
        error
      );
    }
  };

  /**
   * @function: readTest
   * @description: Controller function to read test
   * @param: [req] Request object
   * @param: [res] Response object
   * @returns: A success response or A error response
   * @author Manisha Jadhav
   */
  static readTest = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: responseType = await TemplateService.fetchTest();
      return CustomResponse.sendResponse(
        res,
        response.statusCode,
        response.message,
        response.data,
        response.error
      );
    } catch (error) {
      return CustomResponse.sendResponse(
        res,
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_FETCH,
        [],
        error
      );
    }
  };

  /**
   * @function: removeTest
   * @description: Controller function to remove test
   * @param: [req] Request object
   * @param: [res] Response object
   * @returns: A success response or A error response
   * @author: Manisha Jadhav
   */
  static removeTest = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: responseType = await TemplateService.deleteTest(
        req.body as object
      );
      return CustomResponse.sendResponse(
        res,
        response.statusCode,
        response.message,
        response.data,
        response.error
      );
    } catch (error) {
      return CustomResponse.sendResponse(
        res,
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_DELETE,
        [],
        error
      );
    }
  };

  /**
   * @function: modifyTest
   * @description: Controller function to modify test data
   * @param: [req] Request object
   * @param: [res] Response Object
   * @returns: A success response or A error response
   * @author: Manisha Jadhav
   */
  static modifyTest = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: responseType = await TemplateService.updateTest(
        req.body as object,
        req.params.id
      );
      return CustomResponse.sendResponse(
        res,
        response.statusCode,
        response.message,
        response.data,
        response.error
      );
    } catch (error) {
      return CustomResponse.sendResponse(
        res,
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_UPDATE,
        [],
        error
      );
    }
  };
}
