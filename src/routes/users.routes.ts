import {Router} from "express";
import {UsersController} from "../controllers";

const usersRouter = Router();
const userController = new UsersController();

usersRouter.post('/', userController.create );

export {usersRouter}