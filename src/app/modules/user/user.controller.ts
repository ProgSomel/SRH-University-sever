import { Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
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
    res.status(500).send({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const UserController = {
  createStudent,
};
