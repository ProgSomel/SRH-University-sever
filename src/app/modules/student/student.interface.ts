import { Date, Model, Types } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export interface IStudent {
  id: string;
  user: Types.ObjectId;
  name: TUserName;
  gender: "male" | "female" | "other";
  email: string;
  dateOfBirth?: Date;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isDeleted: boolean;
}

//! for creating instance
export type TStudentMethods = {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<IStudent | null>;
};

export type TStudentModel = Model<
  IStudent,
  Record<string, never>,
  TStudentMethods
>;

//! for creating statics
export interface IStudentModel extends Model<IStudent> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<IStudent | null>;
}
