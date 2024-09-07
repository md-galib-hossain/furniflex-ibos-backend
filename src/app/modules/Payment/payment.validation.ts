import { z } from 'zod';
import { PaymentStatusArr } from './payment.constant';
import { PaymentMethodArr } from '../Order/order.constant';

const createPaymentValidation = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"), 
    price: z.number().min(0, "Price must be a positive number"), 
    transactionId: z.string().min(1, "Transaction ID is required"), 
    cartIds: z.array(z.string().length(24, "Invalid Cart ID format")).nonempty("Cart IDs are required"), 
    itemIds: z.array(z.string().length(24, "Invalid Item ID format")).nonempty("Item IDs are required"), 
    status: z.enum(PaymentStatusArr as [string, ...string[]]), 
    paymentMethod: z.enum(PaymentMethodArr as [string, ...string[]]), 
  }),
});

export const paymentValidationSchema = {
  createPaymentValidation,
};
