import { model, Schema } from "mongoose";
import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcamdemicSemester,
  TMonths,
} from "./academicSemester.interface";

const months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const academicSemesterNames: TAcademicSemesterName[] = [
  "Autumn",
  "Summar",
  "Fall",
];

const academicSemesterCodes: TAcademicSemesterCode[] = ["01", "02", "03"];

const academicSemesterSchema = new Schema<TAcamdemicSemester>({
  name: {
    type: String,
    required: true,
    enum: academicSemesterNames,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: academicSemesterCodes,
  },
  startMonth: {
    type: String,
    enum: months,
  },
  endMonth: {
    type: String,
    enum: months,
  },
});

export const academicSemesterModel = model<TAcamdemicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
