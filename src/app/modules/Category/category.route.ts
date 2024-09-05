import { Router } from "express";
import { CategoryControllers } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import { categoryValidationSchema } from "./category.validation";

const router = Router();

// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model

router.get("/", CategoryControllers.getAllCategories);

router.get("/:id", CategoryControllers.getCategoryById);

router.post(
  "/",
  validateRequest(categoryValidationSchema.createCategoryValidation),
  CategoryControllers.createCategory
);
router.patch(
  "/:id",
  validateRequest(categoryValidationSchema.updateCategoryValidation),
  CategoryControllers.updateCategory
);

export const categoryRoutes = router;
