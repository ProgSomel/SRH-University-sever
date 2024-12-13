import { Router } from "express";
import { studentController } from "./student.controller";

const studentRouter = Router();

studentRouter.post("/create-student", studentController.createStudent);
studentRouter.get("/:id", studentController.getSingleStudent);
studentRouter.delete("/:id", studentController.deleteStudent);
studentRouter.get("/", studentController.getAllStudents);

export default studentRouter;
