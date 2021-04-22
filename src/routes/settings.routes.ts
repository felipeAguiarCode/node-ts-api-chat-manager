import { Router } from "express";
import {SettingsController} from "../controllers";

const settingsRouter = Router();
const settingController = new SettingsController();

settingsRouter.post("/", settingController.create);

export{settingsRouter}