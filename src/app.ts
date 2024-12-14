import express, { Request, Response } from "express";
import cors from "cors";
import studentRouter from "./app/modules/student/student.route";
import userRouter from "./app/modules/user/user.router";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
export default app;
