import httpStatus from 'http-status';
import AppError from '../../errors/App.Error';
import { allowedUpdateFields } from './product.constant';
import { IProduct } from './product.interface';
import { Category } from '../Category/category.model';
import { Types } from 'mongoose';

export const filterPayload = (payload: Partial<IProduct>): Partial<IProduct> => {
  return Object.fromEntries(
    Object.entries(payload).filter(([key, value]) =>
      allowedUpdateFields.includes(key as keyof IProduct)
    )
  ) as Partial<IProduct>;
};

export const validateCategory = async (categoryId: Types.ObjectId) => {
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new AppError(httpStatus.BAD_REQUEST, "Category not found");
    }
  };
  
  export const validateSubCategory = async (
    subCategoryId: Types.ObjectId,
    parentCategoryId?: Types.ObjectId
  ) => {
    const subCategory = await Category.findById(subCategoryId);
    if (!subCategory || subCategory.parentCategory?.toString() !== parentCategoryId?.toString()) {
      throw new AppError(httpStatus.BAD_REQUEST, "SubCategory not found or does not match the category");
    }
  };