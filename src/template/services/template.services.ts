/**
 * @description This file contains a service file for test module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 *
 * @requires fs
 * @requires path
 */

import { CustomMessage } from "../../common/config/messages";
import { StatusCode } from "../../common/config/status-codes";
import { responseType } from "../../common/config/types";
import { CustomResponse } from "../../common/utils/format-repsonse";

export class TemplateService {
  /**
   * @function: addTest
   * @description: Service function to add test
   * @param: [data] data to be processed
   * @returns: New added data
   * @author: Manisha Jadhav
   */
  static addTest = async (data: object): Promise<responseType> => {
    try {
      // Perform databse operation
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.CREATED,
        CustomMessage.MESSAGES.SUCCESS_TO_CREATE,
        [{ testTitle: "test Title", testQualityIndex: 80 }]
      );
    } catch (error: any) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_CREATE,
        error
      );
    }
  };

  /**
   * @function: updateTest
   * @description: Service function to update incoming test data
   * @param: [data] data to be processed
   * @param: id
   * @returns: Updated Data
   * @author: Manisha Jadhav
   */
  static updateTest = async (
    data: object,
    id: string
  ): Promise<responseType> => {
    try {
      // Perform databse operation
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_UPDATE,
        [{ testTitle: "test Title", testQualityIndex: 80 }]
      );
    } catch (error: any) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_UPDATE,
        error
      );
    }
  };

  /**
   * @function: deleteTest
   * @description: Service function to delete test data
   * @param: [data] data to be processed
   * @returns: deleted data
   * @author: Manisha Jadhav
   */
  static deleteTest = async (data: object): Promise<responseType> => {
    try {
      // Perform databse operation
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_DELETE,
        [{ testTitle: "test Title", testQualityIndex: 80 }]
      );
    } catch (error: any) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_DELETE,
        error
      );
    }
  };

  /**
   * @function: fetchTest
   * @description: Service function to fetch all test data
   * @returns: All fetched data
   * @author: Manisha Jadhav
   */
  static fetchTest = async (): Promise<responseType> => {
    try {
      // Perform databse operation
      return CustomResponse.sendSuccessResponse(
        StatusCode.STATUS_CODE.OK,
        CustomMessage.MESSAGES.SUCCESS_TO_FETCH,
        [{ testTitle: "test Title", testQualityIndex: 80 }]
      );
    } catch (error: any) {
      return CustomResponse.sendErrorResponse(
        StatusCode.STATUS_CODE.INTERNAL_SERVER_ERROR,
        CustomMessage.MESSAGES.FAILED_TO_FETCH,
        error
      );
    }
  };
}
