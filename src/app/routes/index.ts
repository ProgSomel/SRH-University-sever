import { Router } from "express";
import studentRouter from "../modules/student/student.route";
import userRouter from "../modules/user/user.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/students",
    route: studentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
