import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentServices } from './payment.service';

const createPayment = catchAsync(async (req, res) => {
  const result = await PaymentServices.createPayment(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Payment created successfully',
    data: result,
  });
});

const getPaymentById = catchAsync(async (req, res) => {
  const result = await PaymentServices.getPaymentById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payment retrieved successfully',
    data: result,
  });
});
const getPaymentsByEmail = catchAsync(async (req, res) => {
    const {email} = req.params
    const result = await PaymentServices.getPaymentsByEmail(email);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Payments retrieved successfully',
      data: result,
    });
  });

export const PaymentControllers = {
  createPayment,
  getPaymentById,getPaymentsByEmail
};
