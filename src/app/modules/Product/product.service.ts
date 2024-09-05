import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/App.Error";
import { TMeta } from "../../utils/sendResponse";
import { ProductSearchableFields } from "./product.constant";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";
import { Category } from "../Category/category.model";
import { filterPayload, validateCategory, validateSubCategory } from "./product.util";

const getAllProducts = async (
  query: Record<string, unknown>
): Promise<{ meta: TMeta; result: IProduct[] }> => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal();

  return {
    meta,
    result,
  };
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  return result;
};

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  if (payload.category) {
    await validateCategory(payload.category);
  }

  if (payload.subCategory) {
    if (!payload.category) {
      throw new AppError(httpStatus.BAD_REQUEST, "Category must be provided for subCategory validation");
    }
    await validateSubCategory(payload.subCategory, payload.category);
  }

  return await Product.create(payload);
};

const updateProductById = async (
  id: string,
  payload: Partial<IProduct>
): Promise<IProduct | null> => {
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  const filteredPayload = filterPayload(payload);

  console.log(filteredPayload);

  const updatedProduct = await Product.findByIdAndUpdate(id, filteredPayload, {
    new: true,
  });

  return updatedProduct;
};

export const ProductServices = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
};
