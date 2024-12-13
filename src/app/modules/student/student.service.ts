import { IStudent } from "./student.interface";
import StudentModel from "./student.model";

const createStudent = async (studentData: IStudent): Promise<IStudent> => {
  //! Custom Statics Method
  if (await StudentModel.isUserExists(studentData.id)) {
    throw new Error("Student already exists");
  }

  //!  Build in Static Method
  const result = await StudentModel.create(studentData);
  return result;

  //! Custom Instance Method
  // const student = new StudentModel(studentData);
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error("Student already exists");
  // }
  // const result = await student.save(); //? Built in instance method
  // return result;
};

const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const deleteStudent = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
