/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentService } from "./student.service";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
// import studentValidationSchema from "./student.validation";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentService.getAllStudents();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student retrieved successfully",
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await studentService.getSingleStudent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student retrieved successfully",
    data: result,
  });
});
const deleteStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await studentService.deleteStudent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student deleted successfully",
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
