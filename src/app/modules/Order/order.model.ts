import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';
import { OrderStatus, OrderStatusArr, PaymentMethod, PaymentMethodArr } from './order.constant';

const orderSchema = new Schema<IOrder>(
  {
    
    email: {
      type: String,
      required: true, 
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: OrderStatusArr,
      default: OrderStatus.Pending,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: PaymentMethodArr,
      default: PaymentMethod.CreditCard,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>('Order', orderSchema);
