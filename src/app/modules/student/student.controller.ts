import { RequestHandler } from "express";
import { studentService } from "./student.service";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudents();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student retrieved successfully",
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await studentService.getSingleStudent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student retrieved successfully",
    data: result,
  });
});
const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
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
