import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemester = catchAsync(async (req, res) => {
  const { password, student } = req.body;


  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "student created successfully",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
