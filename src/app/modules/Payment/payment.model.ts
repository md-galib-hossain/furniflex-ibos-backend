import { model, Schema } from 'mongoose';
import { IPayment } from './payment.interface';
import { PaymentMethod, PaymentMethodArr } from '../Order/order.constant';
import { PaymentStatus, PaymentStatusArr } from './payment.constant';

const paymentSchema = new Schema<IPayment>(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: PaymentMethodArr,
      required: true,
    },
    status: {
      type: String,
      enum: PaymentStatusArr,
      default: PaymentStatus.Pending,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Payment = model<IPayment>('Payment', paymentSchema);
