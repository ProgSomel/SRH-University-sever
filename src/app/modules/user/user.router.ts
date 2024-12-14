import { Router } from "express";
import { UserController } from "./user.controller";

const userRouter = Router();

userRouter.post("/create-student", UserController.createStudent);

export default userRouter;
