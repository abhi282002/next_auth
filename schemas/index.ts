import { UserRole } from "@prisma/client";
import * as z from "zod";
export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().min(6)),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    { message: "New password is required", path: ["newPassword"] }
  );
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z.string(),
  code: z.optional(z.string()),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is not valid",
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 character required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 character required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
