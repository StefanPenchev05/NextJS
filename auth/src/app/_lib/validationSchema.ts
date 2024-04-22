import z from "zod";

declare global {
  interface String {
    isNullOrEmpty(): boolean;
  }
}

String.prototype.isNullOrEmpty = function (): boolean {
  return this === null || this.trim() === "";
};

export const checkEmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email()
  .refine((value) => !value.isNullOrEmpty(), "Email is required");

export const loginSchema = z.object({
  password: z
    .string()
    .min(8)
    .max(255)
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/g.test(value), {
      message: "Password must contain at least one special character",
    }),
  rememberMe: z.boolean().nullable().optional(),
});
