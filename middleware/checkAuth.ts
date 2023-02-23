
import { Request,Response,NextFunction } from "express"
var jwt = require('jsonwebtoken');

export const checkAuth = (req:Request, res:Response, next:NextFunction) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_KEY)
        //req.userData = decode;
        next();
    } catch(error) {
        return res.status(401).json({
            message: "Auth failed"
        })
    }

}