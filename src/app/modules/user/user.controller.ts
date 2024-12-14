import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;

    // const zodParsedStudentData = studentValidationSchema.parse(student);

    const result = await UserService.createStudent(password, student);

    res.send({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
