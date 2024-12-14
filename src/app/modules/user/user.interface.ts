export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: string;
  role: "admin" | "student" | "faculty";
  isDeleted: boolean;
  status: "in-progress" | "blocked";
};
