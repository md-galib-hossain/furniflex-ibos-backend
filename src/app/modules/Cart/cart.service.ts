import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/App.Error';
import { TMeta } from '../../utils/sendResponse';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';

const getAllCartItems = async (
  userId: string, 
  query: Record<string, unknown>
): Promise<{ meta: TMeta; result: ICart[] }> => {
  if (!userId) {
    throw new AppError(httpStatus.BAD_REQUEST, "User ID is required");
  }

  const cartQuery = new QueryBuilder(Cart.find({ user: userId }), query)
    .sort() 
    .paginate() 
    .fields(); 

  
  const result = await cartQuery.modelQuery;
  const meta = await cartQuery.countTotal();

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Cart not found");
  }

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
      user: userId 
    });
  
    if (!cartItem) {
      throw new AppError(httpStatus.NOT_FOUND, "Cart item not found");
    }
  
    return cartItem;
  };

export const CartServices = {
  getAllCartItems,getCartItemById
};
