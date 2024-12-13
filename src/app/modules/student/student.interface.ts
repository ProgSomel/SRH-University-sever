import { Model } from "mongoose";

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
  password: string;
  name: TUserName;
  gender: "male" | "female" | "other";
  email: string;
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
  isDeleted: boolean;
}

//! for creating instance
export type TStudentMethods = {
  isUserExists(id: string): Promise<IStudent | null>;
};

export type TStudentModel = Model<
  IStudent,
  Record<string, never>,
  TStudentMethods
>;

//! for creating statics
export interface IStudentModel extends Model<IStudent> {
  isUserExists(id: string): Promise<IStudent | null>;
}
