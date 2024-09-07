import { Router } from "express";
import { productRoutes } from "../modules/Product/product.route";
import { categoryRoutes } from "../modules/Category/category.route";
import { userRoutes } from "../modules/User/user.route";
import { cartRoutes } from "../modules/Cart/cart.route";
import { stripeRouter } from "../modules/Stripe/stripe.route";
import { paymentRouter } from "../modules/Payment/payment.route";

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
    },
    {
        path: '/stripe',
        route : stripeRouter
    },
    {
        path: '/payments',
        route : paymentRouter
    }
]
moduleRoutes.forEach((route)=> router.use(route.path,route.route))
export default router