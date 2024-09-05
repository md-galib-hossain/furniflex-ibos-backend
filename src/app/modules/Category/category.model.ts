import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

// Category Schema
const categorySchema = new Schema<ICategory>(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      parentCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        default: null, // null means it's a main category
      },
    },
    { timestamps: true }
  );
  
  export const Category = model<ICategory>("Category", categorySchema);
