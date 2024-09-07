import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";


const getUserById = catchAsync(async (req, res) => {
  const result = await UserServices.getUserById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

const updateUserById = catchAsync(async (req, res) => {
  const result = await UserServices.updateUserById(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully",
    data: result,
  });
});
const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  
  console.log(result)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

export const UserControllers = {
  getUserById,
  updateUserById,createUser
};
