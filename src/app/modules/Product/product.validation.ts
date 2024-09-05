import { z } from 'zod';

// Product validation for creation
const createProductValidation = z.object({
  body: z.object({
    name: z.string().min(1,"Product name is required"),
    description: z.string().min(1,"Description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    discountPercentage: z.number().min(0).max(100).optional(), 
    imageUrl: z.string().url("Image URL must be a valid URL"),
    stock: z.number().min(0, "Stock must be a positive number"),
    category: z.string().min(1,"Category is required"), 
    subCategory: z.string().optional(),
  }),
});

// Product validation for updates
const updateProductValidation = z.object({
  body: z.object({
    name: z.string().min(1, "Product name cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
    price: z.number().min(0, "Price must be a positive number").optional(),
    discountPercentage: z.number().min(0).max(100).optional(),
    imageUrl: z.string().url("Image URL must be a valid URL").optional(),
    stock: z.number().min(0, "Stock must be a positive number").optional(),
  }),
});

export const productValidationSchema = {
  createProductValidation,
  updateProductValidation,
};
