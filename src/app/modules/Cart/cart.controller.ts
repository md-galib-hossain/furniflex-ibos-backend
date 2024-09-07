import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CartServices } from "./cart.service";

const createCartItem = catchAsync(async (req, res) => {
  const result = await CartServices.createCartItem(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart item added successfully",
    data: result,
  });
});

const getCartItems = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await CartServices.getAllCartItems(email, req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart items retrieved successfully",
    data: result,
  });
});

const deleteCartItem = catchAsync(async (req, res) => {
    const { cartItemId } = req.params;
   const result= await CartServices.deleteCartItem(cartItemId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Cart item deleted successfully",
      data: result,
    });
  });

const updateCartItemQuantity = catchAsync(async (req, res) => {
  const { cartItemId, userId } = req.params;
  const { quantity } = req.body;

  const result = await CartServices.updateCartItemQuantity(cartItemId, userId, quantity);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart item quantity updated successfully",
    data: result,
  });
});

export const CartController = {
  createCartItem,
  getCartItems,
  deleteCartItem,
  updateCartItemQuantity,
};
