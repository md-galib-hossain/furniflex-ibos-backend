import { Router } from "express";
import { productRoutes } from "../modules/Product/product.route";
import { categoryRoutes } from "../modules/Category/category.route";
import { userRoutes } from "../modules/User/user.route";
import { cartRoutes } from "../modules/Cart/cart.route";

const router = Router()

const moduleRoutes = [
    {
        path: '/products',
        route : productRoutes
    },
    {
        path: '/categories',
        route : categoryRoutes
    },
    {
        path: '/users',
        route : userRoutes
    },
    {
        path: '/cart',
        route : cartRoutes
    }
]
moduleRoutes.forEach((route)=> router.use(route.path,route.route))
export default router