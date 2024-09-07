import { model, Schema } from 'mongoose';
import { ICart } from './cart.interface';

const cartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null, // Nullable user field
    },
    email: {
      type: String,
      required: true,
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    itemName: {
      type: String,
      required: true, 
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    itemImage: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Cart = model<ICart>('Cart', cartSchema);
