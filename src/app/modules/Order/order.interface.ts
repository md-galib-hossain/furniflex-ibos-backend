import { Document, ObjectId, Types } from 'mongoose';
import { IProduct } from '../Product/product.interface';

export interface IOrderProduct {
  product:  Types.ObjectId;
  quantity: number;
  price: number;
}

export type TOrderStatus = 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'
export type TPaymentMethod = 'Credit Card' | 'PayPal' | 'Bank Transfer';
export interface IOrder {
  customer: Types.ObjectId ;
  products: IOrderProduct[];
  totalPrice: number;
  status: TOrderStatus;
  shippingAddress: string;
  paymentMethod: TPaymentMethod;
  createdAt: Date;
}
