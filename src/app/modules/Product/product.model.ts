import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct> (
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 0, 
    },
    imageUrl: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true, // Each product must have a category
      },
      subCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        default: null, // Subcategory is optional, as not all products will have subcategories
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true,
    toJSON: { virtuals: true }, 
  
   }
);
productSchema.virtual("finalPrice").get(function () {
  if (this.discountPercentage && this.discountPercentage > 0) {
    return this.price - (this.price * this.discountPercentage) / 100;
  }
  return this.price;
});

export const Product = model<IProduct>('Product',productSchema)




  