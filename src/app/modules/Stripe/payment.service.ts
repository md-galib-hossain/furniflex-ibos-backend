import Stripe from "stripe";
const createStripePaymentIntent = async (amount: any) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20",
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  return {
    clientSecret: paymentIntent.client_secret,
  };
};

export const StripeServices = {createStripePaymentIntent}