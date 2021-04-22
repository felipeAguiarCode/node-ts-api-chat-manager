import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message>{

}

export{MessagesRepository}