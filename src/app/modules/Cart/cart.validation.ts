import { z } from 'zod';

const createCartValidation = z.object({
  body: z.object({
    user: z.string().min(1, "User ID is required").optional(),
    email: z.string().email("Must be a valid email address").nonempty("Email is required"),
    itemId: z.string().min(1, "Product ID is required"),
    itemName: z.string().min(1, "Item name is required"),
    itemPrice: z.number().min(0, "Item price must be a valid number"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    itemImage: z.string().min(1, "Item image URL is required"),
  }),
});

export const cartValidationSchema = {
  createCartValidation,
};
