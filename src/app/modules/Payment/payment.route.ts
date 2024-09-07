import { Router } from "express";
import { PaymentControllers } from "./payment.controller";

const router = Router()


router.post("/",PaymentControllers.createPayment)
router.get("/",PaymentControllers.getPaymentById)
router.get("/:email",PaymentControllers.getPaymentsByEmail)
export const paymentRouter = router