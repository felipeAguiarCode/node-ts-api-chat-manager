import { getCustomRepository, Repository } from "typeorm";

import { Setting } from "../entities";
import {SettingsRepository} from "../repositories";

interface ISettingsCreate{
    chat:boolean;
    username:string;    
}

class SettingsService{
    private settingsRepository: Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }
    
    async create({chat, username}:ISettingsCreate){
        
        //select * from settings where username = "username" limit 1;
        const userAlreadyExists = await this.settingsRepository.findOne({
            username,
        });

        if (userAlreadyExists){
            throw new Error("User already Exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        })

        await this.settingsRepository.save(settings);

        return settings;

    }
}

export {SettingsService}