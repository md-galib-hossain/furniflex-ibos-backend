import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

// Get all categories
const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategories(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully",
    meta: result.meta,
    data: result.result,
  });
});

// Get a category by ID
const getCategoryById = catchAsync(async (req, res) => {
  const result = await CategoryServices.getCategoryById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});

// Create a new category
const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});
// update a category
const updateCategory = catchAsync(async (req, res) => {
    const {id} = req.params
  const result = await CategoryServices.updateCategoryById(id,req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});

export const CategoryControllers = {
  getAllCategories,
  getCategoryById,
  createCategory,updateCategory
};
