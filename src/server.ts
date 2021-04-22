import express from "express";
import {routes} from "./routes"
import {createConnection} from "typeorm";

class Server {
    private express: express.Application;
    private port = process.env.PORT || 3333;

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
        this.express.use(routes);
    }

    private listen():void{
        this.express.listen(this.port, ()=>{
            console.log(`✔ server online on port: ${this.port}`);
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