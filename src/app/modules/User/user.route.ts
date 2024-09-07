import { Router } from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";

const router = Router();

// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model
router.get("/:id", UserControllers.getUserById);
router.post(
  "/",
  validateRequest(userValidationSchema.createUserValidation),
  UserControllers.createUser
);

router.patch(
  "/:id",
  validateRequest(userValidationSchema.updateUserValidation),
  UserControllers.updateUserById
);

export const userRoutes = router;
