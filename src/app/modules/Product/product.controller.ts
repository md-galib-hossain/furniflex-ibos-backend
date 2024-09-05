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

  export const ProductControllers = {
    getAllProducts
  }