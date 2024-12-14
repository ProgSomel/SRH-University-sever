import config from "../../config";
import { IStudent } from "../student/student.interface";
import StudentModel from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async (
  password: string,
  studentData: IStudent,
): Promise<IStudent | undefined> => {
  const userData: Partial<TUser> = {};
  //? if passowrd is not giving ... then use default password
  userData.password = password || (config.default_password as string);
  userData.role = "student";

  //? manaully genereted id
  userData.id = "2030100001";

  //? create a user
  const newUser = await User.create(userData);

  //? create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //?Reference id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudent,
};
