import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/App.Error";
import { TMeta } from "../../utils/sendResponse";
import { Category } from "./category.model";
import { ICategory } from "./category.interface";
import { CategorySearchableFields } from "./category.constant";

// Get all categories
const getAllCategories = async (
  query: Record<string, unknown>
): Promise<{ meta: TMeta; result: ICategory[] }> => {
  const categoryQuery = new QueryBuilder(Category.find(), query)
    .search(CategorySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await categoryQuery.modelQuery;
  const meta = await categoryQuery.countTotal();

  return {
    meta,
    result,
  };
};

// Get a single category by ID
const getCategoryById = async (id: string): Promise<ICategory | null> => {
  const result = await Category.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found");
  }

  return result;
};

// Create a new category
const createCategory = async (payload: ICategory): Promise<ICategory> => {
  const isExists = await Category.findOne({
    name: { $regex: payload.name, $options: `i` },
  });
  if (isExists) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Category with this name already exists"
    );
  }
  const result = await Category.create(payload);
  return result;
};

const updateCategoryById = async (
  id: string,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const isExist = await Category.findById(id);

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found");
  }

  const result = Category.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const CategoryServices = {
  getAllCategories,
  getCategoryById,
  createCategory,updateCategoryById
};
