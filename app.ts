import express,{Request, Response} from "express";
import {router} from "./routes/api-routes"
import { AppDataSource } from "./data-source"
import swaggerDocs from "./utils/swagger";
import * as dotenv from 'dotenv' 
dotenv.config() 

var bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer();

const app = express();
const PORT = 5000;

//form dara convert in json and urlencode
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(upload.array()); 


app.use("/",router)


AppDataSource.initialize()
    .then(()=>{
       // console.log("db connected")
    }).catch((e)=>{
        console.log(e)
    })


app.listen(PORT,():void=>{
    console.log("Server is running on "+PORT)
    swaggerDocs(app, PORT)
})