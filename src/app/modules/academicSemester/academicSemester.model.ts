import { model, Schema } from "mongoose";
import {
  TAcamdemicSemester,
} from "./academicSemester.interface";
import { academicSemesterCodes, academicSemesterNames, months } from "./academicSemester.constant";


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
