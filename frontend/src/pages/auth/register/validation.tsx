import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters").max(32, "Username must be at most 32 characters"),
    email: z.string().email("Please enter a valid email address"),
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().optional(),
    birthdate: z
      .string()
      .nonempty("Date of Birth is required")
      .refine(val => /^\d{2}\/\d{2}\/\d{4}$/.test(val), {
        message: "Date must be in DD/MM/YYYY format",
        path: ["birthdate"],
      }),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
