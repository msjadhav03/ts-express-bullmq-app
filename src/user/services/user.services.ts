/**
 * @file user.services.ts
 * @description This file contains user service code
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { CustomResponse } from "../../common/utils/format-repsonse";
import { CustomMessage } from "../../common/config/messages";
import { StatusCode } from "../../common/config/status-codes";

require("dotenv").config({ path: process.env.PWD + "/.env" });

const SALT_ROUNDS: any = process.env.SALT_ROUNDS;
const JWT_SECRET: any = process.env.JWT_SECRET;
const EXPIRES_IN: any = process.env.EXPIRES_IN;

export class UserService {
  /**
   * @function: addUserToDatabase
   * @description: Adding user to database
   * @param: [data] Data to be inserted
   * @returns: success response or Error Response
   * @author: Manisha Jadhav
   */
  static addUserToDatabase = async (data: any): Promise<any> => {
    try {
      const { username, password, role, firstName, lastName } = data;
      let finalResponse = {};
      let user: any = "";
      bcrypt.hash(password, parseInt(SALT_ROUNDS), async (err, hash) => {
        if (err) {
          throw err;
        } else {
          user = new User({
            username,
            role,
            password: hash,
            firstName,
            lastName,
          });
          await user.save();
        }
      });
      const token = await jwt.sign(
        { username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: EXPIRES_IN }
      );
      finalResponse = {
        username,
        token,
        role,
      };
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.CREATED,
        CustomMessage.MESSAGES.SUCCESS_TO_CREATE_USER,
        [finalResponse]
      );
    } catch (error) {
      console.log(error);
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_CREATE_USER,
        error
      );
    }
  };

  /**
   * @function: getAllUserList
   * @description: Fetching list of user from database
   * @returns: success response or Error Response
   * @author: Manisha Jadhav
   */
  static getAllUserList = async (): Promise<any> => {
    try {
      const users = await User.find(
        {},
        {
          _id: 1,
          username: 1,
          role: 1,
          firstName: 1,
          lastName: 1,
        }
      );
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.CREATED,
        CustomMessage.MESSAGES.SUCCESS_TO_CREATE_USER,
        [users]
      );
    } catch (error) {
      console.log(error);
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_FETCH_USER,
        error
      );
    }
  };

  /**
   * @function: removeUserFromDatabase
   * @description: Removing user to database
   * @param: [data] Data to be deleted
   * @returns: success response or Error Response
   * @author: Manisha Jadhav
   */
  static removeUserFromDatabase = async (data: any): Promise<any> => {
    try {
      const result: any = await User.findOneAndDelete({ _id: data.id });
      let finalResponse: object = { ...result };
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_DELETE_USER,
        [finalResponse]
      );
    } catch (error) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_DELETE_USER,
        error
      );
    }
  };

  /**
   * @function: updateUserFromDatabase
   * @description: Updating user to database
   * @param: [data] Data to be deleted
   * @returns: success response or Error Response
   * @author: Manisha Jadhav
   */
  static updateUserFromDatabase = async (data: any): Promise<any> => {
    try {
      const result: any = await User.findOneAndUpdate(
        { _id: data.id },
        { $set: data }
      );
      let finalResponse: object = { ...result };
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_UPDATE_USER,
        [finalResponse]
      );
    } catch (error) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_UPDATE_USER,
        error
      );
    }
  };

  /**
   * @function: checkUserExists
   * @description: Check if user exists to database
   * @param: [data] Data to be deleted
   * @returns: success response or Error Response
   * @author: Manisha Jadhav
   */
  static checkUserExists = async (data: any): Promise<any> => {
    try {
      const { username, password } = data;
      const user = await User.findOne({ username: username });
      if (!user) {
        return CustomResponse.sendErrorResponse(
          StatusCode.STATUS_CODE.BAD_REQUEST,
          CustomMessage.MESSAGES.FAILED_LOGIN,
          CustomMessage.MESSAGES.INVALID_USER
        );
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return CustomResponse.sendErrorResponse(
          StatusCode.STATUS_CODE.BAD_REQUEST,
          CustomMessage.MESSAGES.FAILED_LOGIN,
          CustomMessage.MESSAGES.INVALID_PASSWORD
        );
      }
      const token = await jwt.sign(
        { username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: EXPIRES_IN }
      );

      let finalResponse: object = {
        token,
        role: user.role,
        username: user.username,
      };
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.LOGIN_SUCCESS,
        [finalResponse]
      );
    } catch (error) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_LOGIN,
        error
      );
    }
  };
}
