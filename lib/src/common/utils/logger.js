"use strict";
/**
 * @file logger.ts
 * @description This file contains code of logging function
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires winston
 * @requires winston-daily-rotate-file
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChildLogger = void 0;
const winston_1 = __importStar(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const CUSTOM_LEVELS = {
    critical: 0,
    error: 1,
    warn: 2,
    info: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
};
const transport = new winston_daily_rotate_file_1.default({
    filename: "server-logs-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxSize: "100m",
    maxFiles: "5",
    dirname: "logs",
    zippedArchive: true,
});
const volume = (0, winston_1.format)((info, opts) => {
    const { shortUUID = "", commonMessage = "", module = "", error = "", processData = "", } = info.message;
    info.timestamp = new Date();
    info.request_id = shortUUID;
    info.module = module;
    if (error) {
        info.error = `${(error === null || error === void 0 ? void 0 : error.message) + (error === null || error === void 0 ? void 0 : error.stack) || error.toString()}`;
        info.message = `${commonMessage}`;
    }
    else {
        info.message = `${commonMessage}`;
    }
    return info;
});
const logger = winston_1.default.createLogger({
    levels: CUSTOM_LEVELS,
    level: "debug",
    format: winston_1.default.format.combine(volume(), winston_1.default.format.json(), winston_1.default.format.errors({ stack: true })),
    transports: [new winston_1.default.transports.Console(), transport],
});
const createChildLogger = (queueName) => {
    return logger.child({ queue_name: queueName });
};
exports.createChildLogger = createChildLogger;
exports.default = logger;
