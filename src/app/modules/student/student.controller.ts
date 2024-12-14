import { NextFunction, Request, Response } from "express";
import { studentService } from "./student.service";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
// import studentValidationSchema from "./student.validation";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudents();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await studentService.getSingleStudent(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await studentService.deleteStudent(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "student deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
