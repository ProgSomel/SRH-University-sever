import { z } from "zod";
import { academicSemesterCodes, academicSemesterNames, months } from "./academicSemester.constant";

const createAcademicValidationSchema = z.object({
    body: z.object({
        name: z.enum([...academicSemesterNames] as [string, ...string[]]),
        year: z.date(),
        code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
        startMonth: z.enum([...months] as [string, ...string[]]),
        endMonth: z.enum([...months] as [string, ...string[]]),
    })
});

export const academicSemesterValidations = {
  createAcademicValidationSchema,
};
