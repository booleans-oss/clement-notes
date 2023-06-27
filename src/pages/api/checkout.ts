import { env } from "@/env.mjs";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from 'stripe'

const stripeInstance = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = await stripeInstance.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{
        price: 'price_1N9GjKF2AUBgr27wU6IS90do',
        quantity: 1,
      }],
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost/cart`,
    });

    if(url) res.status(301).redirect(url);
    else res.status(500).json({ statusCode: 500, message: 'Something went wrong' });
    return
  } catch (err) {
    console.log(err)
    res.status(500).json({ statusCode: 500, message: "error message" });
  }
  return;
}
