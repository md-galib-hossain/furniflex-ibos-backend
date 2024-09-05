import { Router } from "express";
import { productRoutes } from "../modules/Product/product.route";
import { categoryRoutes } from "../modules/Category/category.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/products',
        route : productRoutes
    },
    {
        path: '/categories',
        route : categoryRoutes
    }
]
moduleRoutes.forEach((route)=> router.use(route.path,route.route))
export default router