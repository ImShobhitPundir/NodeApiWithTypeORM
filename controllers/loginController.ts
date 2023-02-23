import { Request,Response } from "express"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"
var jwt = require('jsonwebtoken');

const login = async (req:Request,res:Response) => {
   
    const repositary = AppDataSource.getRepository(User)

    const data = await repositary.findOne({
        where:{
            id: req.body.user_id,
            age: req.body.password
        }
    })
    if(data){
        const token = jwt.sign(
                        {
                            id: req.body.user_id,
                            age: req.body.password
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        });

        res.status(200).send({
            data:data,
            msg: "Success",
            token:token
        }) 
    }else{
        res.status(400).send({
            msg:"Your User ID or Password did not match. Please Try Again."
        }) 
    }
   
    
}

export {
    login
}