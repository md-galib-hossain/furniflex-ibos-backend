import { model, Schema } from 'mongoose';
import { IPayment } from './payment.interface';
import { PaymentMethod, PaymentMethodArr } from '../Order/order.constant';
import { PaymentStatus, PaymentStatusArr } from './payment.constant';

const paymentSchema = new Schema<IPayment>(
  {
    email: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    cartIds: {
      type: [Schema.Types.ObjectId], 
      required: true,
    },
    itemIds: {
      type: [Schema.Types.ObjectId], 
      required: true,
    },
    status: {
      type: String,
      enum: PaymentStatusArr,
      default: PaymentStatus.Pending,
    },
    paymentMethod: {
      type: String,
      enum: PaymentMethodArr,
      default: PaymentMethod.CashOnDelivery,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Payment = model<IPayment>('Payment', paymentSchema);
