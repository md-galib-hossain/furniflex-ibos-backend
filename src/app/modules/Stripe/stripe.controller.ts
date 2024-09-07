import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { StripeServices } from "./payment.service";
import sendResponse from "../../utils/sendResponse";

const createPaymentIntent = catchAsync(async (req, res) => {
  const { price } = req.body;

  if (typeof price !== "number") {
    return res.status(400).json({ error: "Price must be a number" });
  }

  const amount = Math.floor(price * 100);
  const result = await StripeServices.createStripePaymentIntent(amount);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Intent successfull",
    data: result,
  });
});

export const StripeController = { createPaymentIntent };
