import { Date } from "mongoose";

export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TAcademicSemesterName = "Autumn" | "Summar" | "Fall";
export type TAcademicSemesterCode = "01" | "02" | "03";

export type TAcamdemicSemester = {
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode;
  year: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
