"use strict";
/**
 * @file format-response.ts
 * @description This file contains code to format and send response
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponse = void 0;
const status_codes_1 = require("../config/status-codes");
const messages_1 = require("../config/messages");
class CustomResponse {
}
exports.CustomResponse = CustomResponse;
_a = CustomResponse;
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
CustomResponse.sendResponse = (res, statusCode, message, data, error) => __awaiter(void 0, void 0, void 0, function* () {
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
    }
    catch (error) {
        return res.status(status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR).send({
            statusCode: status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
            message: messages_1.CustomMessage.MESSAGES.ERROR_OCCURED_WHILE_FORMULATING_RESPONSE,
            error: error,
        });
    }
});
/**
 * @function: sendErrorResponse
 * @description: Service function to format error reponse
 * @param: [message] Error message
 * @param: [error] Actual error
 * @returns: formatted error response
 */
CustomResponse.sendErrorResponse = (statusCode, message, error) => {
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
CustomResponse.sendSuccessResponse = (statusCode, message, data) => {
    return {
        statusCode,
        message,
        data,
    };
};
