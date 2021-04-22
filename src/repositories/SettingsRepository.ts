import { Entity, EntityRepository, Repository } from "typeorm";

import { Setting } from "../entities";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{}

export {SettingsRepository}