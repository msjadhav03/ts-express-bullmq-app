/**
 * @file status-codes.ts
 * @description This file contains status code for all responses
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

export class StatusCode {
  static STATUS_CODE = {
    CREATED: 201,
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWDED: 405,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUEST: 429,
    PAYLOAD_TOO_LARGE: 413,
    UNAVAILABLE_FOR_LEGAL_REASON: 451,
  };
}
