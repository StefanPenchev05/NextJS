import z from "zod"

export const checkEmailSchema = z.string().email("Invalid Email").min(7).max(255).trim().toLowerCase();