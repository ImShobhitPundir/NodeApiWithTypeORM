import express,{Request, Response} from "express";
import {login} from '../controllers/loginController';
import {createUser, updateUser, listOfUsers} from '../controllers/userController';
import validateResource from "../middleware/validateResource";
import { createUserSchema, updateUserSchema } from "../schema/user.schema";
import { appLoginSchema } from "../schema/login.schema";
import { checkAuth } from "../middleware/checkAuth";


const router = express.Router()


/**
   * @openapi
   * '/login/app':
   *  post:
   *     tags:
   *     - Login
   *     summary: Mobile App Login 
   *     security: []
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/AppLoginInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/AppLoginResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/login/app", validateResource(appLoginSchema),login)

/**
   * @openapi
   * '/user/create':
   *  post:
   *     tags:
   *     - User
   *     summary: Create a New User
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post("/user/create", validateResource(createUserSchema), createUser)

/**
   * @openapi
   * '/user/update':
   *  put:
   *     tags:
   *     - User
   *     summary: Update User
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/UpdateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UpdateUserResponse'
   *      404:
   *        description: ID not found
   *      400:
   *        description: Bad request
   */
router.put("/user/update", validateResource(updateUserSchema), updateUser)

/**
   * @openapi
   * /user/list:
   *  get:
   *     tags:
   *     - User
   *     description: All User List
   *     responses:
   *       200:
   *         description: success
   */
router.get("/user/list", checkAuth, listOfUsers)



export {
    router
}