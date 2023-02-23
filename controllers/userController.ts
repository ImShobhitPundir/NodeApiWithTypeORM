import { Request,Response } from "express"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"

const createUser = async (req:Request,res:Response) => {
    const repositary = AppDataSource.getRepository(User);

    const user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    const data = await repositary.save(user);
    if(data){
        res.status(200).send({
            data:data
        }) 
    }else{
        res.status(409).send({
            data:'conflict'
        }) 
    }
   
}

const updateUser = async (req:Request,res:Response) => {
    const repositary = AppDataSource.getRepository(User);
    const checkRecord = await repositary.findOneBy({id: req.body.id,});
    if(checkRecord){
        const user = await repositary.findOneBy({
            id: req.body.id,
        })
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        const data = await repositary.save(user);
        if(data){
            res.status(200).send({
                data:data
            }) 
        }else{
            res.status(409).send({
                msg:'conflict'
            }) 
        }
    }else{
        res.status(404).send({
            msg:'User ID did not match'
        }) 
    }
    
   
}

const listOfUsers = async (req:Request,res:Response) => {
    const repositary = AppDataSource.getRepository(User);
    const users = await repositary.find();
    
    if(users){
        res.status(200).send({
            data:users
        }) 
    }else{
        res.status(409).send({
            msg:'conflict'
        }) 
    }
   
}

export {
    createUser,
    updateUser,
    listOfUsers
}