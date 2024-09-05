import { z } from "zod";
import { OrderStatusArr, PaymentMethodArr } from "./order.constant";

const createOrderValidation = z.object({
  body: z.object({
    customer: z.string().min(1, "Customer ID is required"),
    products: z
      .array(
        z.object({
          product: z.string().min(1, "Product ID is required"),
          quantity: z.number().min(1, "Quantity must be at least 1"),
          price: z.number().min(0, "Price must be a positive number"),
        })
      )
      .nonempty("At least one product is required"),
    totalPrice: z.number().min(0, "Total price must be a positive number"),
    status: z.enum(OrderStatusArr as [string, ...string[]]),
    shippingAddress: z.string().min(1, "Shipping address is required"),
    paymentMethod: z.enum(PaymentMethodArr as [string, ...string[]]),
  }),
});

export const orderValidationSchema = {
  createOrderValidation,
};
