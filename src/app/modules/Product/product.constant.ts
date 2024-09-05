import { IProduct } from "./product.interface";

export const ProductSearchableFields = ['name']
export const allowedUpdateFields: Array<keyof IProduct> = [
    'name',
    'description',
    'price',
    'discountPercentage',
    'imageUrl',
    'stock',
  ];