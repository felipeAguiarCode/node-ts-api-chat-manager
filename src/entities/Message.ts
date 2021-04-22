import {
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm"

import {v4 as uuid} from "uuid";
import { User } from "./User";

@Entity("messages")
class Message{

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    id:string;

    @Column()
    adminId:string;

    @Column()
    text:string;

    @JoinColumn({name:"userId"})
    @ManyToOne(()=> User)
    user:User;

    @Column()
    userId:string;

    @CreateDateColumn()
    createdAt:Date;

}
export{Message}