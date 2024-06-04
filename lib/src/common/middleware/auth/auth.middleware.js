"use strict";
/**
 * @file auth.middleware.ts
 * @description This file contains code of auth middleware
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const status_codes_1 = require("../../config/status-codes");
const messages_1 = require("../../config/messages");
const format_repsonse_1 = require("../../utils/format-repsonse");
const JWT_SECRET = process.env.JWT_SECRET;
class Auth {
}
exports.Auth = Auth;
/**
 * @function: authenticateUser
 * @description This function is reponsible for authenticate user
 * @param: [req]
 * @param: [res]
 * @param: [next]
 * @returns A error response
 */
Auth.authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.UNAUTHORIZED, messages_1.CustomMessage.MESSAGES.UNAUTHORIZED, [], undefined);
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token.split(" ")[1] || token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.error(error);
        return format_repsonse_1.CustomResponse.sendResponse(res, status_codes_1.StatusCode.STATUS_CODE.FORBIDDEN, messages_1.CustomMessage.MESSAGES.FORBIDDEN, [], undefined);
    }
};
Auth.authorizeUser = (req, res, next) => {
    // Add restriction as per route
    next();
};
