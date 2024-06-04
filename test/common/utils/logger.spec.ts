/**
 * @file logger.spec.ts
 * @description This file contains contains unit test cases for logger.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
import logger, { createChildLogger } from "../../../src/common/utils/logger";

describe("Logger", () => {
  it("should log a message at each level", () => {
    logger.critical("This is a critical message");
    logger.error("This is an error message");
    logger.warn("This is a warning message");
    logger.info("This is an info message");
    logger.verbose("This is a verbose message");
    logger.debug("This is a debug message");
    logger.silly("This is a silly message");
  });

  it("should create a child logger with additional metadata", () => {
    const childLogger = createChildLogger("test-queue");
    childLogger.info("Message for child logger");
  });
});
