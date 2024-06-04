/**
 * @file user.routes.ts
 * @description This file contains user route definitions
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */

import { Router } from "express";
const userRouter = Router();

import { CustomConstant } from "../../common/config/constants";
import { UserController } from "../controllers/user.controllers";

/**
 * Below routes are responsible for handling User authorization and authetication request requests
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Add new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's firstname
 *                 example: Manisha
 *               lastName:
 *                 type: string
 *                 description: User's lastName
 *                 example: Jadhav
 *               username:
 *                 type: string
 *                 description: User's username or email
 *                 example: m.jadhav@gmail.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: PWD!!12ps
 *               role:
 *                 type: string
 *                 description: User's role
 *                 example: General
 *             required:
 *               - username
 *               - password
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
 *                       firstName:
 *                         type: string
 *                         description: User's firstName
 *                         example: Manisha
 *                       lastName:
 *                         type: string
 *                         description: User's lastname
 *                         example: Jadhav
 *                       username:
 *                         type: string
 *                         description: User's username or email
 *                         example: m.jadhav@gmail.com
 *                       role:
 *                         type: string
 *                         description: User's role
 *                         example: General
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

userRouter.post(`${CustomConstant.USER_BASE_URL}`, UserController.addUser);

/**
 * @swagger
 * /user:
 *   patch:
 *     summary: Modify existing user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's firstname
 *                 example: Manisha
 *               lastName:
 *                 type: string
 *                 description: User's lastName
 *                 example: Jadhav
 *               username:
 *                 type: string
 *                 description: User's username or email
 *                 example: m.jadhav@gmail.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: PWD!!12ps
 *               role:
 *                 type: string
 *                 description: User's role
 *                 example: General
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
 *                       firstName:
 *                         type: string
 *                         description: User's firstName
 *                         example: Manisha
 *                       lastName:
 *                         type: string
 *                         description: User's lastname
 *                         example: Jadhav
 *                       username:
 *                         type: string
 *                         description: User's username or email
 *                         example: m.jadhav@gmail.com
 *                       role:
 *                         type: string
 *                         description: User's role
 *                         example: General
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
userRouter.patch(`${CustomConstant.USER_BASE_URL}`, UserController.updateUser);

/**
 * @swagger
 * /user:
 *   delete:
 *     summary: Remove Existing user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
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
 *                       firstName:
 *                         type: string
 *                         description: User's firstName
 *                         example: Manisha
 *                       lastName:
 *                         type: string
 *                         description: User's lastname
 *                         example: Jadhav
 *                       username:
 *                         type: string
 *                         description: User's username or email
 *                         example: m.jadhav@gmail.com
 *                       role:
 *                         type: string
 *                         description: User's role
 *                         example: General
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
userRouter.delete(
  `${CustomConstant.USER_BASE_URL}/:id`,
  UserController.deleteUser
);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get list of all users
 *     tags: [User]
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
 *                       firstName:
 *                         type: string
 *                         description: User's firstName
 *                         example: Manisha
 *                       lastName:
 *                         type: string
 *                         description: User's lastname
 *                         example: Jadhav
 *                       username:
 *                         type: string
 *                         description: User's username or email
 *                         example: m.jadhav@gmail.com
 *                       role:
 *                         type: string
 *                         description: User's role
 *                         example: General
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
userRouter.get(`${CustomConstant.USER_BASE_URL}`, UserController.fetchUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user and get access token
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username or email
 *                 example: m.jadhav@gmail.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: PWD!!12ps
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
 *                       token:
 *                         type: string
 *                         description: Access Token
 *                         example: adshjadsnasdjkasdnmasjfkaj232
 *                       username:
 *                         type: string
 *                         description: User's username or email
 *                         example: m.jadhav@gmail.com
 *                       role:
 *                         type: string
 *                         description: User's role
 *                         example: General
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 400
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Invalid Request body
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: Invalid username || Invalid password
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

userRouter.post(`${CustomConstant.LOGIN_URL}`, UserController.loginUser);

export default userRouter;
