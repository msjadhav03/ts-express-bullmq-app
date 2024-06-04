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

import winston, { format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const CUSTOM_LEVELS: winston.config.AbstractConfigSetLevels = {
  critical: 0,
  error: 1,
  warn: 2,
  info: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

interface CustomLevels extends winston.Logger {
  critical: winston.LeveledLogMethod;
  error: winston.LeveledLogMethod;
  warn: winston.LeveledLogMethod;
  info: winston.LeveledLogMethod;
  verbose: winston.LeveledLogMethod;
  debug: winston.LeveledLogMethod;
  silly: winston.LeveledLogMethod;
}

const transport: DailyRotateFile = new DailyRotateFile({
  filename: "server-logs-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "100m",
  maxFiles: "5",
  dirname: "logs",
  zippedArchive: true,
});

const volume = format((info, opts) => {
  const {
    shortUUID = "",
    commonMessage = "",
    module = "",
    error = "",
    processData = "",
  } = info.message;

  info.timestamp = new Date();
  info.request_id = shortUUID;
  info.module = module;
  if (error) {
    info.error = `${error?.message + error?.stack || error.toString()}`;
    info.message = `${commonMessage}`;
  } else {
    info.message = `${commonMessage}`;
  }
  return info;
});


const logger: CustomLevels = <CustomLevels>winston.createLogger({
  levels: CUSTOM_LEVELS,
  level: "debug",
  format: winston.format.combine(
    volume(),
    winston.format.json(),
    winston.format.errors({ stack: true })
  ),
  transports: [new winston.transports.Console(), transport],
});

export const createChildLogger = (queueName: string) => {
  return logger.child({ queue_name: queueName }) as CustomLevels;
};
export default logger;
