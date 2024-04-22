import z from "zod"

export const checkEmailSchema = z.string().email("Invalid Email").min(7).max(255).trim().toLowerCase();

export const loginSchema = z.object({
    email: z.string().email("Invalid Email").min(7).max(255).trim().toLowerCase(),
    password: z.string().min(8).max(255).refine(value => /[!@#$%^&*(),.?":{}|<>]/g.test(value), 
    {
        message: "Password must contain at least one special character"
    }),
    rememberMe: z.boolean().nullable().optional()
});