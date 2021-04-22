import express from "express";
import {router} from "./routes";

import * as dotenv from "dotenv";
dotenv.config({path:__dirname+'/.env'});

import {createConnection} from "typeorm";

class Server {
    private express: express.Application;
    private port = process.env.PORT || 3333;
    private apiVersion = process.env.APIVERSION || "/api/v1";

    constructor(){
        this.express = express();
        this.setupMiddlewares();
        this.setupRoutes();
        this.setupDatabase();
        this.listen();
    }

    private setupMiddlewares():void{
        this.express.use(express.json());
    }

    private setupRoutes(): void{
        this.express.use(this.apiVersion,router);
    }

    private listen():void{
        this.express.listen(this.port, ()=>{
            console.log(`✔ server online on port: ${this.port}`);
            console.log(this.apiVersion);
        })
    }

    private setupDatabase():void{
        createConnection(); 
    }

    public startServer():express.Application{
        return this.express;
    }

}

export {Server}