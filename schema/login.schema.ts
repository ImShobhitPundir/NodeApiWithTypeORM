import { object, number, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    AppLoginInput:
 *      type: object
 *      required:
 *        - user_id
 *        - password
 *      properties:
 *        user_id:
 *          type: string
 *          default: 1
 *        password:
 *          type: string
 *          default: 25
 *    AppLoginResponse:
 *      type: object
 *      properties:
 *          data:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  age:
 *                      type: integer
 *          msg:
 *              type: string
 *          token:
 *              type: string
 */

export const appLoginSchema = object({
  body: object({
    user_id: string({
      required_error: "User ID is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
  })
});


