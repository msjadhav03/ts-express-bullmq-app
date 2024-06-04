"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file logger.spec.ts
 * @description This file contains contains unit test cases for logger.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
const logger_1 = __importStar(require("../../../src/common/utils/logger"));
describe("Logger", () => {
    it("should log a message at each level", () => {
        logger_1.default.critical("This is a critical message");
        logger_1.default.error("This is an error message");
        logger_1.default.warn("This is a warning message");
        logger_1.default.info("This is an info message");
        logger_1.default.verbose("This is a verbose message");
        logger_1.default.debug("This is a debug message");
        logger_1.default.silly("This is a silly message");
    });
    it("should create a child logger with additional metadata", () => {
        const childLogger = (0, logger_1.createChildLogger)("test-queue");
        childLogger.info("Message for child logger");
    });
});
