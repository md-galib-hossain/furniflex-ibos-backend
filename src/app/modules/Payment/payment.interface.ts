import { Document, Types } from 'mongoose';
import { IOrder, TPaymentMethod } from '../Order/order.interface';

export type TPaymentStatus = 'Pending' | 'Completed' | 'Failed';

export interface IPayment extends Document {
  order: Types.ObjectId | IOrder;
  amount: number;
  paymentMethod: TPaymentMethod;
  status: TPaymentStatus;
  createdAt: Date;
}
