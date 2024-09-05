import { z } from 'zod';

const createCartValidation = z.object({
  body: z.object({
    user: z.string().min(1, "User ID is required"),
    items: z.array(z.object({
      product: z.string().min(1, "Product ID is required"),
      quantity: z.number().min(1, "Quantity must be at least 1"),
    })).nonempty("At least one item is required"),
  }),
});

export const cartValidationSchema = {
  createCartValidation,
};
