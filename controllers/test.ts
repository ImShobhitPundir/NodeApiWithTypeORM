import { Request,Response } from "express"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"
import { appendFile } from "fs";

const test = async (req:Request,res:Response) => {
    //work with entity manager
    const data = await AppDataSource.manager.find(User)
    // ----Insert-------
   
   /* const data = await AppDataSource.manager.insert(User,{
        firstName:'Rahul',
        lastName:'Singh',
        age:25
    }) */

    //----------------Save-------------
   /* const user = new User();
    user.firstName = 'Shivam';
    user.lastName = 'Goel';
    user.age = 27;
    const data = await AppDataSource.manager.save(user)
    */

    //work with getRepositary
    //const repositary = AppDataSource.getRepository(User)
    //const data = await repositary.find()
    // ----Insert-------
   /* const data = await repositary.insert({
        firstName:'Ravi',
        lastName:'Singh',
        age:28
    }) */
    //--------Save--------
   /* const user = new User();
    user.firstName = 'Shivam';
    user.lastName = 'Goel';
    user.age = 27;
    const data = await repositary.save(user)
    */
    res.status(200).send({
        data:data
    }) 
}

export {
    test
}