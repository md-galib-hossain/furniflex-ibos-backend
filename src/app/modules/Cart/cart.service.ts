import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/App.Error";
import { TMeta } from "../../utils/sendResponse";
import { ICart } from "./cart.interface";
import { Cart } from "./cart.model";
import { Product } from "../Product/product.model";

const getAllCartItems = async (
  email: string,
  query: Record<string, unknown>
): Promise<{ meta: TMeta; result: ICart[] }> => {
  if (!email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email is required");
  }

  const cartQuery = new QueryBuilder(Cart.find({ email: email }), query)
    .sort()
    .paginate()
    .fields();

  const result = await cartQuery.modelQuery;
  const meta = await cartQuery.countTotal();

 

  return {
    meta,
    result,
  };
};

const getCartItemById = async (
  userId: string,
  cartItemId: string
): Promise<ICart | null> => {
  if (!userId) {
    throw new AppError(httpStatus.BAD_REQUEST, "User ID is required");
  }

  if (!cartItemId) {
    throw new AppError(httpStatus.BAD_REQUEST, "Cart Item ID is required");
  }

  const cartItem = await Cart.findOne({
    _id: cartItemId,
    user: userId,
  });

  if (!cartItem) {
    throw new AppError(httpStatus.NOT_FOUND, "Cart item not found");
  }

  return cartItem;
};

const createCartItem = async (input: {
  email: string;
  itemId: string;
  itemPrice: number;
  quantity: number;
  itemImage: string;
  itemName: string
}): Promise<ICart> => {
  const { email, itemId, itemPrice, quantity, itemImage,itemName } = input;

  if (!email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Email is required");
  }

  if (!itemId || !quantity || !itemPrice || !itemImage || !itemName) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "All cart item fields are required"
    );
  }

  const result = await Cart.create({
    email,
    itemId,
    itemPrice,
    quantity,
    itemImage,
    itemName
  });

  return result;
};

const deleteCartItem = async (cartItemId: string) => {
  if (!cartItemId) {
    throw new AppError(httpStatus.BAD_REQUEST, "Cart Item ID is required");
  }

  const cartItem = await Cart.findById(cartItemId);
  if (!cartItem) {
    throw new AppError(httpStatus.NOT_FOUND, "Cart item not found");
  }

 const res = await Cart.deleteOne({ _id: cartItemId });
 return res
};

const updateCartItemQuantity = async (
  cartItemId: string,
  email: string,
  newQuantity: number
): Promise<ICart> => {
  if (!cartItemId || !email || newQuantity === undefined) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid input data");
  }

  const cartItem = await Cart.findOne({ _id: cartItemId, email: email });
  if (!cartItem) {
    throw new AppError(httpStatus.NOT_FOUND, "Cart item not found");
  }

  if (newQuantity < 1) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Quantity cannot be less than 1"
    );
  }

  const product = await Product.findById(cartItem.itemId);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }

  if (newQuantity > product.stock) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `Quantity exceeds available stock of ${product.stock}`
    );
  }

  cartItem.quantity = newQuantity;
  await cartItem.save();

  return cartItem;
};

export const CartServices = {
  getAllCartItems,
  getCartItemById,
  createCartItem,deleteCartItem,updateCartItemQuantity
};
