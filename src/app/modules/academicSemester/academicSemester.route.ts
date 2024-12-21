import { Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";

const academicSemesterRouter = Router();
academicSemesterRouter.post('/create-academic-semester', AcademicSemesterController.createAcademicSemester);
export default academicSemesterRouter;
