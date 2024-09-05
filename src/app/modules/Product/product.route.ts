import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router()

// req,res flow: router -->> controller -->> services -->> model  
//                router <<-- controller <<-- services <<-- model
router.get('/', ProductControllers.getAllProducts);

export const productRoutes = router
