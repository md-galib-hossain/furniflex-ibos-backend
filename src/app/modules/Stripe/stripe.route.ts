import { Router } from "express";
import { StripeController } from "./stripe.controller";

const router = Router()
router.post("/create-payment-intent",StripeController.createPaymentIntent)

export const stripeRouter = router