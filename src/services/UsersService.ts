import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities";
import { UserRepository } from "../repositories";

class UsersService{

    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UserRepository);
    }

    async create(email:string){
        const usersRepository = getCustomRepository(UserRepository);

        //verificar se usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        //se não existir, salvar no DB
        if(userExists){
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        //se existir, retornar user
        return user;

    }

}

export {UsersService}