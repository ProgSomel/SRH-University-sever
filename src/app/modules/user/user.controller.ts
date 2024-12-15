import { UserService } from "./user.service";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await UserService.createStudent(password, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student created successfully",
    data: result,
  });
});

export const UserController = {
  createStudent,
};
