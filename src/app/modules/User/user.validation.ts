import { z } from "zod";

const createUserValidation = z.object({
  body: z.object({
    displayName: z.string().min(1, "Display name is required").optional(),
    email: z.string().email("Must be a valid email address").optional(),

    avatarUrl: z.string().optional(),
    addresses: z.array(z.string()).optional(),
  }),
});

const updateUserValidation = z.object({
  body: z.object({
   
    displayName: z.string().min(1, "Display name cannot be empty").optional(),
    email: z.string().email("Must be a valid email address").optional(),
    
  
    avatarUrl: z.string().url("Avatar URL must be a valid URL").optional(),
    addresses: z.array(z.string()).optional(),
  }),
});

export const userValidationSchema = {
  createUserValidation,
  updateUserValidation,
};
