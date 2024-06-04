"use strict";
/**
 * @file messages.ts
 * @description This file contains a messages for all the REST API's
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMessage = void 0;
class CustomMessage {
}
exports.CustomMessage = CustomMessage;
CustomMessage.MESSAGES = {
    CREATED: "Created Successfully",
    DELETED: "Deleted Successfully",
    UPDATED: "Updated Successfully",
    FETCHED: "Fetched Successfully",
    SERVER_CLOSED: "Server has been closed with unexpected error",
    DATABASE_SERVER_ERROR: "Database server error",
    SUCCESS_TO_CREATE: "New test has been added",
    SUCCESS_TO_DELETE: "Existing test has been deleted",
    SUCCESS_TO_UPDATE: "Existing test has been updated",
    SUCCESS_TO_FETCH: "Existing test has been fetched",
    CONNECTION_FAILED: "Failed to connect",
    SUCCESS_TO_CREATE_USER: "New user has been added successfully",
    SUCCESS_TO_UPDATE_USER: "Existing user has been updated successfully",
    SUCCESS_TO_DELETE_USER: "Existing user has been deleted successfully",
    SUCCESS_TO_FETCH_USER: "Existing user has been fetched successfully",
    LOGIN_SUCCESS: "User has been logged successfully",
    UNAUTHORIZED: "Unauthorized user access",
    FORBIDDEN: "Forbidden: insufficient access",
    NOT_FOUND: "Failed No resource found",
    TOO_MANY_REQUEST: "Request limit has been exceeded",
    PAYLOAD_TOO_LARGE: "Incoming request heavier to process",
    UNAVAILABLE_FOR_LEGAL_REASON: "Service is not avaiable due to leagal reason",
    ERROR_OCCURED_WHILE_FORMULATING_RESPONSE: "Error Occured while formulating response",
    FAILED_TO_CREATE: "Failed to create new test",
    FAILED_TO_UPDATE: "Failed to update existing test",
    FAILED_TO_DELETE: "Failed to delete existing test",
    FAILED_TO_FETCH: "Failed to fetch existing test",
    FAILED_TO_CREATE_USER: "Failed to create new user",
    FAILED_TO_UPDATE_USER: "Failed to update existing user",
    FAILED_TO_DELETE_USER: "Failed to delete existing user",
    FAILED_TO_FETCH_USER: "Failed to fetch existing user",
    FAILED_LOGIN: "Login failed",
    INTERNAL_SERVER_ERROR: "Internal server error",
    INVALID_PASSWORD: "Invalid password",
    INVALID_USER: "Invalid User"
};
