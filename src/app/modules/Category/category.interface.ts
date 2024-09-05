import { Types } from "mongoose";

export interface ICategory {
    _id?: Types.ObjectId;
    name: string;
    parentCategory?: Types.ObjectId | null; 
    createdAt?: Date;
    updatedAt?: Date;
  }