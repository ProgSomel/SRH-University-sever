import { Date } from "mongoose";

export type TMonth =
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

export type TAcamdemicSemester = {
  name: "Autumn" | "Summer" | "Fall";
  code: "01" | "02" | "03";
  year: Date;
  startMonth: TMonth;
  endMonth: TMonth;
};
