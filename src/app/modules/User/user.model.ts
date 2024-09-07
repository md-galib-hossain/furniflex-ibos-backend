import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    
    displayName: {
      type: String,
      default: null,

    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
  
   
    avatarUrl: {
      type: String,
      default: "https://i.postimg.cc/TYNWsp6m/avatar-placeholder.png"
    },
 

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
