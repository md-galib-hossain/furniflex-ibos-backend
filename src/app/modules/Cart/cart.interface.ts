import { Types } from 'mongoose';


export interface ICart  {
  user?: Types.ObjectId ;
  email: string; 
  itemId: Types.ObjectId;
  itemPrice: number;
  itemName: string;
  quantity: number;
  itemImage: string;
  createdAt: Date;
}
