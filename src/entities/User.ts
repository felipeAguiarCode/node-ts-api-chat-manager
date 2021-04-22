import {
Entity,
PrimaryColumn,
Column,
CreateDateColumn
} from "typeorm";

import {v4 as uuid} from "uuid";

@Entity("users")
class User{ 

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    id:string;
    
    @Column()
    email:string;

    @CreateDateColumn()
    createdAt:Date;
}

export{User}