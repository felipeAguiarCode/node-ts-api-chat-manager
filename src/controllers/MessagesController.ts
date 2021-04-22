import {Request, Response} from "express";
import { MessagesService } from "../services";

class MessagesController{

    async create(request:Request, response:Response){

        const {adminId, text, userId} = request.body;
        const messagesService = new MessagesService();

        const message = await messagesService.create({
            adminId,
            text,
            userId
        })

        return response
                .json(message)
                .status(200);

    }

    // /messages/{usuarioId}
    async showByUser(request: Request, response:Response){
        const {id} = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id);

        return response.json(list).status(200);

    }   

}

export {MessagesController}