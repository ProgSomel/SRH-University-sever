import { z } from "zod";

const userNameSchema = z.object({
  firstName: z
    .string()
    .max(20, "First name cannot be more than 20 characters")
    .min(1, "First name is required"), // Updated here
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"), // Updated here
});

const guardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"), // Updated here
  fatherOccupation: z.string().min(1, "Father's occupation is required"), // Updated here
  fatherContactNo: z.string().min(1, "Father's contact number is required"), // Updated here
  motherName: z.string().min(1, "Mother's name is required"), // Updated here
  motherOccupation: z.string().min(1, "Mother's occupation is required"), // Updated here
  motherContactNo: z.string().min(1, "Mother's contact number is required"), // Updated here
});

const localGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required"), // Updated here
  occupation: z.string().min(1, "Local guardian's occupation is required"), // Updated here
  contactNo: z.string().min(1, "Local guardian's contact number is required"), // Updated here
  address: z.string().min(1, "Local guardian's address is required"), // Updated here
});

const studentValidationSchema = z.object({
  id: z.string().min(1, "ID is required"), // Updated here
  password: z.string().min(1, "passowrd is required").max(20), // Updated here
  name: userNameSchema,
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Invalid gender" }),
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email("Invalid email format").min(1, "Email is required"), // Updated here
  contactNo: z.string().min(1, "Contact number is required"), // Updated here
  emergencyContactNo: z.string().min(1, "Emergency contact number is required"), // Updated here
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().min(1, "Present address is required"), // Updated here
  permanentAddress: z.string().min(1, "Permanent address is required"), // Updated here
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
  isDeleted: z.boolean().default(false),
});

export default studentValidationSchema;
