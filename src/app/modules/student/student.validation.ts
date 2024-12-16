import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, "First name cannot be more than 20 characters")
    .min(1, "First name is required"), // Updated here
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"), // Updated here
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"), // Updated here
  fatherOccupation: z.string().min(1, "Father's occupation is required"), // Updated here
  fatherContactNo: z.string().min(1, "Father's contact number is required"), // Updated here
  motherName: z.string().min(1, "Mother's name is required"), // Updated here
  motherOccupation: z.string().min(1, "Mother's occupation is required"), // Updated here
  motherContactNo: z.string().min(1, "Mother's contact number is required"), // Updated here
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"), // Updated here
  occupation: z.string().min(1, "Local guardian's occupation is required"), // Updated here
  contactNo: z.string().min(1, "Local guardian's contact number is required"), // Updated here
  address: z.string().min(1, "Local guardian's address is required"), // Updated here
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(1, "passowrd is required").max(20), // Updated here
    name: userNameValidationSchema,
    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Invalid gender" }),
    }),
    dateOfBirth: z.date().optional(),
    email: z.string().email("Invalid email format").min(1, "Email is required"), // Updated here
    contactNo: z.string().min(1, "Contact number is required"), // Updated here
    emergencyContactNo: z
      .string()
      .min(1, "Emergency contact number is required"), // Updated here
    bloodGroup: z
      .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
      .optional(),
    presentAddress: z.string().min(1, "Present address is required"), // Updated here
    permanentAddress: z.string().min(1, "Permanent address is required"), // Updated here
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImage: z.string().optional(),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
