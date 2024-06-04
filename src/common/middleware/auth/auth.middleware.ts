/**
 * @file auth.middleware.ts
 * @description This file contains code of auth middleware
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import jwt from "jsonwebtoken";
import { StatusCode } from "../../config/status-codes";
import { CustomMessage } from "../../config/messages";
import { CustomResponse } from "../../utils/format-repsonse";

const JWT_SECRET: any = process.env.JWT_SECRET;

export class Auth {
  /**
   * @function: authenticateUser
   * @description This function is reponsible for authenticate user
   * @param: [req]
   * @param: [res]
   * @param: [next]
   * @returns A error response
   */
  static authenticateUser = (req: any, res: any, next: any) => {
    const token = req.header("Authorization");
    if (!token) {
      return CustomResponse.sendResponse(
        res,
        StatusCode.STATUS_CODE.UNAUTHORIZED,
        CustomMessage.MESSAGES.UNAUTHORIZED,
        [],
        undefined
      );
    }
    try {
      const decoded = jwt.verify(token.split(" ")[1] || token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      console.error(error);
      return CustomResponse.sendResponse(
        res,
        StatusCode.STATUS_CODE.FORBIDDEN,
        CustomMessage.MESSAGES.FORBIDDEN,
        [],
        undefined
      );
    }
  };

  static authorizeUser = (req: any, res: any, next: any) => {
    // Add restriction as per route
    next();
  };
}
