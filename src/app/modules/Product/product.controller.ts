import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProducts(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Products retrieved successfully",
      meta: result.meta,
      data: result.result,
    });
  });
const getProductById = catchAsync(async (req, res) => {
    const result = await ProductServices.getProductById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product retrieved successfully",
   
      data: result,
    });
  });
const createProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.createProduct(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product created successfully",
   
      data: result,
    });
  });

  // update a product
const updateProductById = catchAsync(async (req, res) => {
  const {id} = req.params
const result = await ProductServices.updateProductById(id,req.body);
sendResponse(res, {
  statusCode: httpStatus.CREATED,
  success: true,
  message: "Product updated successfully",
  data: result,
});
});

  export const ProductControllers = {
    getAllProducts,getProductById,createProduct,
    updateProductById
  }