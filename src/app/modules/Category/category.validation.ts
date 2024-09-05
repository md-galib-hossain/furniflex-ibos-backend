import { z } from 'zod';

const createCategoryValidation = z.object({
  body: z.object({
    name: z.string().min(1, "Category name is required"),
    parentCategory: z.string().optional(), 
  }),
});

const updateCategoryValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    parentCategory: z.string().optional(),
  }),
});

export const categoryValidationSchema = {
  createCategoryValidation,
  updateCategoryValidation,
};
