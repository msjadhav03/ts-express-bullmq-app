"use strict";
/**
 * @file user.services.ts
 * @description This file contains user service code
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const format_repsonse_1 = require("../../common/utils/format-repsonse");
const messages_1 = require("../../common/config/messages");
const status_codes_1 = require("../../common/config/status-codes");
require("dotenv").config({ path: process.env.PWD + "/.env" });
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.EXPIRES_IN;
class UserService {
}
exports.UserService = UserService;
_a = UserService;
/**
 * @function: addUserToDatabase
 * @description: Adding user to database
 * @param: [data] Data to be inserted
 * @returns: success response or Error Response
 * @author: Manisha Jadhav
 */
UserService.addUserToDatabase = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, role, firstName, lastName } = data;
        let finalResponse = {};
        let user = "";
        bcrypt_1.default.hash(password, parseInt(SALT_ROUNDS), (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                throw err;
            }
            else {
                user = new user_model_1.default({
                    username,
                    role,
                    password: hash,
                    firstName,
                    lastName,
                });
                yield user.save();
            }
        }));
        const token = yield jsonwebtoken_1.default.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: EXPIRES_IN });
        finalResponse = {
            username,
            token,
            role,
        };
        return format_repsonse_1.CustomResponse.sendSuccessResponse(status_codes_1.StatusCode.STATUS_CODE.CREATED, messages_1.CustomMessage.MESSAGES.SUCCESS_TO_CREATE_USER, [finalResponse]);
    }
    catch (error) {
        console.log(error);
        return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_CREATE_USER, error);
    }
});
/**
 * @function: getAllUserList
 * @description: Fetching list of user from database
 * @returns: success response or Error Response
 * @author: Manisha Jadhav
 */
UserService.getAllUserList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find({}, {
            _id: 1,
            username: 1,
            role: 1,
            firstName: 1,
            lastName: 1,
        });
        return format_repsonse_1.CustomResponse.sendSuccessResponse(status_codes_1.StatusCode.STATUS_CODE.CREATED, messages_1.CustomMessage.MESSAGES.SUCCESS_TO_CREATE_USER, [users]);
    }
    catch (error) {
        console.log(error);
        return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_FETCH_USER, error);
    }
});
/**
 * @function: removeUserFromDatabase
 * @description: Removing user to database
 * @param: [data] Data to be deleted
 * @returns: success response or Error Response
 * @author: Manisha Jadhav
 */
UserService.removeUserFromDatabase = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndDelete({ _id: data.id });
        let finalResponse = Object.assign({}, result);
        return format_repsonse_1.CustomResponse.sendSuccessResponse(status_codes_1.StatusCode.STATUS_CODE.OK, messages_1.CustomMessage.MESSAGES.SUCCESS_TO_DELETE_USER, [finalResponse]);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_DELETE_USER, error);
    }
});
/**
 * @function: updateUserFromDatabase
 * @description: Updating user to database
 * @param: [data] Data to be deleted
 * @returns: success response or Error Response
 * @author: Manisha Jadhav
 */
UserService.updateUserFromDatabase = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndUpdate({ _id: data.id }, { $set: data });
        let finalResponse = Object.assign({}, result);
        return format_repsonse_1.CustomResponse.sendSuccessResponse(status_codes_1.StatusCode.STATUS_CODE.OK, messages_1.CustomMessage.MESSAGES.SUCCESS_TO_UPDATE_USER, [finalResponse]);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_TO_UPDATE_USER, error);
    }
});
/**
 * @function: checkUserExists
 * @description: Check if user exists to database
 * @param: [data] Data to be deleted
 * @returns: success response or Error Response
 * @author: Manisha Jadhav
 */
UserService.checkUserExists = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = data;
        const user = yield user_model_1.default.findOne({ username: username });
        if (!user) {
            return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.BAD_REQUEST, messages_1.CustomMessage.MESSAGES.FAILED_LOGIN, messages_1.CustomMessage.MESSAGES.INVALID_USER);
        }
        if (!bcrypt_1.default.compareSync(password, user.password)) {
            return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.BAD_REQUEST, messages_1.CustomMessage.MESSAGES.FAILED_LOGIN, messages_1.CustomMessage.MESSAGES.INVALID_PASSWORD);
        }
        const token = yield jsonwebtoken_1.default.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: EXPIRES_IN });
        let finalResponse = {
            token,
            role: user.role,
            username: user.username,
        };
        return format_repsonse_1.CustomResponse.sendSuccessResponse(status_codes_1.StatusCode.STATUS_CODE.OK, messages_1.CustomMessage.MESSAGES.LOGIN_SUCCESS, [finalResponse]);
    }
    catch (error) {
        return format_repsonse_1.CustomResponse.sendErrorResponse(status_codes_1.StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR, messages_1.CustomMessage.MESSAGES.FAILED_LOGIN, error);
    }
});
