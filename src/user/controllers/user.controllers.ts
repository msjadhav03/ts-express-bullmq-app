/**
 * @file user.controller.ts
 * @description This file contains controller level code user module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */
import { Request, Response } from "express";
import { CustomMessage } from "../../common/config/messages";
import { StatusCode } from "../../common/config/status-codes";
import { UserService } from "../services/user.services";
import { CustomResponse } from "../../common/utils/format-repsonse";
import { responseType } from "../../common/config/types";

export class UserController {
  /**
   * @function fetchUser
   * @description To get list of users from database
   * @param: [req]
   * @param: [res]
   * @returns: Success or Error Response
   * @author: Manisha Jadhav
   */
  static fetchUser = async (req: Request, res: Response) => {
    try {
      const response = await UserService.getAllUserList();
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
        CustomMessage.MESSAGES.FAILED_TO_FETCH_USER,
        [],
        error
      );
    }
  };
  /**
   * @function: addUser
   * @description: This controller function is responsible for handing user creation request
   * @param: [req] Request Object
   * @param: [res] Response Object
   * @returns: A success response or A error response
   * @author: Manisha Jadhav
   */
  static addUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await UserService.addUserToDatabase(req.body);
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
        CustomMessage.MESSAGES.FAILED_TO_CREATE_USER,
        [],
        error
      );
    }
  };

  /**
   * @function: updateUser
   * @description: This controller function is responsible for handing user updation request
   * @param: [req] Request Object
   * @param: [res] Response Object
   * @returns: A success response or A error response
   * @author: Manisha Jadhav
   */
  static updateUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await UserService.updateUserFromDatabase({
        ...req.body,
        ...req.params,
      });
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
        CustomMessage.MESSAGES.FAILED_TO_UPDATE_USER,
        [],
        error
      );
    }
  };

  /**
   * @function: deleteUser
   * @description: This controller function is responsible for handing user deletion request
   * @param: [req] Request Object
   * @param: [res] Response Object
   * @returns: A success response or A error response
   * @author: Manisha Jadhav
   */
  static deleteUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: responseType = await UserService.removeUserFromDatabase({
        ...req.params,
      });
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
        CustomMessage.MESSAGES.FAILED_TO_DELETE_USER,
        [],
        error
      );
    }
  };

  /**
   * @function: loginUser
   * @description: This controller function is responsible for handing user authentication request
   * @param: [req] Request Object
   * @param: [res] Response Object
   * @returns: A success response or A error response
   * @author: Manisha Jadhav
   */
  static loginUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const response: responseType = await UserService.checkUserExists(
        req.body
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
        CustomMessage.MESSAGES.FAILED_LOGIN,
        [],
        error
      );
    }
  };
}
