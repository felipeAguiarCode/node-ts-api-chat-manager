import { Router, Request, Response } from "express";
import { MessagesController, SettingsController, UsersController } from "../controllers";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users",usersController.create);

routes.post("/messages",messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export {routes};