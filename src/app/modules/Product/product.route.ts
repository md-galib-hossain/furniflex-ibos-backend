import { Router } from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { productValidationSchema } from "./product.validation";

const router = Router();

// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProductById);
router.post(
  "/",
  validateRequest(productValidationSchema.createProductValidation),
  ProductControllers.createProduct
);

router.patch(
  "/:id",
  validateRequest(productValidationSchema.updateProductValidation),
  ProductControllers.updateProductById
);

export const productRoutes = router;
