/**
 * @file test.routes.ts
 * @description This file contains all routes for test module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */

import { Router } from "express";
import { CustomConstant } from "../../common/config/constants";
import { TemplateController } from "../controllers/template.controllers";
const testRouter = Router();

/**
 * @swagger
 * /template:
 *   get:
 *     summary: Example Summary
 *     tags: [Template]
 *     components:
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: The ID of the resource
 *                 message:
 *                   type: string
 *                   description: The name of the resource
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 */
testRouter.get(
  `${CustomConstant.TEMPLATE_BASE_URL}`,
  TemplateController.readTest
);

/**
 * @swagger
 * /template:
 *   post:
 *     summary: Example Summary
 *     tags: [Template]
 *     components:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               testTitle:
 *                 type: string
 *                 description: Test title value
 *                 example: Test title
 *               testQualityIndex:
 *                 type: number
 *                 description: Quality Index value
 *                 example: 99.34
 *             required:
 *               - testTitle
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success true"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 */
testRouter.post(
  `${CustomConstant.TEMPLATE_BASE_URL}`,
  TemplateController.addNewTest
);

/**
 * @swagger
 * /template/:id:
 *   patch:
 *     summary: Example Summary
 *     tags: [Template]
 *     components:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               testTitle:
 *                 type: string
 *                 description: Test title value
 *                 example: Test title
 *               testQualityIndex:
 *                 type: number
 *                 description: Quality Index value
 *                 example: 99.34
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Some ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status code of the success response
 *                 message:
 *                   type: string
 *                   description: Custom success message
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server erro
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 */
testRouter.patch(
  `${CustomConstant.TEMPLATE_BASE_URL}/:id`,
  TemplateController.modifyTest
);

/**
 * @swagger
 * /template/:id:
 *   delete:
 *     summary: Example Summary
 *     tags: [Template]
 *     components:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Some ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status code for the success response
 *                 message:
 *                   type: string
 *                   description: Custom message for the success response
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 *
 */
testRouter.delete(
  `${CustomConstant.TEMPLATE_BASE_URL}`,
  TemplateController.removeTest
);

export default testRouter;
