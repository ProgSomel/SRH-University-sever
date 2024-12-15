import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";

const userRouter = Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log("I am Shenabahini");
  next();
};

userRouter.post("/create-student", shenaBahini, UserController.createStudent);

export default userRouter;
