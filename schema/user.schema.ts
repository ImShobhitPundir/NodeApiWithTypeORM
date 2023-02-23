import { object, number, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - firstName
 *        - lastName
 *        - age
 *      properties:
 *        firstName:
 *          type: string
 *          default: Ram
 *        lastName:
 *          type: string
 *          default: Singh
 *        age:
 *          type: integer
 *          default: 25
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        age:
 *          type: integer
 */

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "firstName is required",
    }),
    lastName: string({
      required_error: "lastName is required",
    }),
    age: number({
      required_error: "Age is required",
    }),
  })
});


/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateUserInput:
 *      type: object
 *      required:
 *        - id
 *        - firstName
 *        - lastName
 *        - age
 *      properties:
 *        id:
 *          type: number
 *          default: 1
 *        firstName:
 *          type: string
 *          default: Ram
 *        lastName:
 *          type: string
 *          default: Singh
 *        age:
 *          type: integer
 *          default: 25
 *    UpdateUserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        age:
 *          type: integer
 */
export const updateUserSchema = object({
    body: object({
      id: number({
        required_error: "ID is required",
        }),
      firstName: string({
        required_error: "firstName is required",
      }),
      lastName: string({
        required_error: "lastName is required",
      }),
      age: number({
        required_error: "Age is required",
      }),
    })
  });

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

