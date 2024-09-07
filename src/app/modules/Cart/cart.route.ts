import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { cartValidationSchema } from "./cart.validation";
import { CartController } from "./cart.controller";

const router = Router();

// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model

router.get("/:email", CartController.getCartItems);

router.post(
  "/",
  validateRequest(cartValidationSchema.createCartValidation),
  CartController.createCartItem
);

router.delete("/:cartItemId", CartController.deleteCartItem);

router.patch("/:cartItemId/:userId", CartController.updateCartItemQuantity);

export const cartRoutes = router;
