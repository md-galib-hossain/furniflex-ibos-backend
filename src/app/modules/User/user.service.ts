import httpStatus from "http-status";
import AppError from "../../errors/App.Error";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const getUserById = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  return user;
};

const updateUserById = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const user = await User.findById(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return updatedUser;
};

const createUser = async (payload: Partial<IUser>) => {
  const exists = await User.findOne({ email: payload.email });
  if (exists) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User with same email already exists"
    );
  }
  console.log(payload)
  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  getUserById,
  updateUserById,createUser
};
