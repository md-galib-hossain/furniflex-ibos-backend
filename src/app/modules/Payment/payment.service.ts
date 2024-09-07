import httpStatus from 'http-status';
import { Types } from 'mongoose';
import mongoose from 'mongoose';
import AppError from '../../errors/App.Error';
import { IPayment } from './payment.interface';
import { Payment } from './payment.model';
import { Cart } from '../Cart/cart.model';

const createPayment = async (payload: {
  email: string;
  price: number;
  transactionId: string;
  cartIds: Types.ObjectId[];
  itemIds: Types.ObjectId[];
  status: string;
  paymentMethod: string;
}): Promise<IPayment> => {
  const session = await mongoose.startSession(); 
  session.startTransaction();

  try {

    const payment = new Payment(payload);
    const savedPayment = await payment.save({ session });

    if (payload.cartIds.length > 0) {
      await Cart.deleteMany({ _id: { $in: payload.cartIds } }, { session });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return savedPayment;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Error creating payment:", error);
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to create payment');
  }
};

const getPaymentById = async (id: string): Promise<IPayment | null> => {
  const payment = await Payment.findById(id);

  if (!payment) {
    throw new AppError(httpStatus.NOT_FOUND, 'Payment not found');
  }

  return payment;
};

const getPaymentsByEmail = async (email: string): Promise<IPayment[]> => {
  if (!email) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Email is required');
  }
  
  const payments = await Payment.find({ email });
  
  if (payments.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, 'No payments found for this email');
  }

  return payments;
};

export const PaymentServices = {
  createPayment,
  getPaymentById,
  getPaymentsByEmail,
};
