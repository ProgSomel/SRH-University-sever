import { Request, Response } from "express";
import { studentService } from "./student.service";
import { Error } from "mongoose";
import studentValidationSchema from "./student.validation";
// import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const zodParsedStudentData = studentValidationSchema.parse(student);

    const result = await studentService.createStudent(zodParsedStudentData);

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

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudents();
    res.send({
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: (error as Error).message,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentService.getSingleStudent(id);
    res.send({
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: (error as Error).message,
    });
  }
};
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentService.deleteStudent(id);
    res.send({
      success: true,
      message: "Student deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: (error as Error).message,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
