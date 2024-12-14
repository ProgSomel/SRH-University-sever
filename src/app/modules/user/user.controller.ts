import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;

    // const zodParsedStudentData = studentValidationSchema.parse(student);

    const result = await UserService.createStudent(password, student);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
