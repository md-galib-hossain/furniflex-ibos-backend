import { z } from 'zod';
import { PaymentStatusArr } from './payment.constant';
import { PaymentMethodArr } from '../Order/order.constant';

const createPaymentValidation = z.object({
  body: z.object({
    order: z.string().min(1, "Order ID is required"),
    amount: z.number().min(0, "Amount must be a positive number"),
    paymentMethod: z.enum(PaymentMethodArr as [string, ...string[]]),
    status: z.enum(PaymentStatusArr as [string, ...string[]]),
  }),
});

export const paymentValidationSchema = {
  createPaymentValidation,
};
