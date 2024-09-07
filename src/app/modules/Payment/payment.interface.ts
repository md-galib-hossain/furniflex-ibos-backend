import { Document, Types } from "mongoose";
import { IOrder, TPaymentMethod } from "../Order/order.interface";

export type TPaymentStatus = "pending" | "completed" | "failed";

export interface IPayment extends Document {
  email: string;
  price: number;
  transactionId: string;
  cartIds: Types.ObjectId[];
  itemIds: Types.ObjectId[];
  status: TPaymentStatus;
  paymentMethod: TPaymentMethod;
  createdAt: Date;
}
