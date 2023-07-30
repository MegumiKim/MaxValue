import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import CartItems from "../../components/CartItems";

export default function CheckoutSuccess() {
  return (
    <main className="p-4">
      <h1 className="text-2xl">Thank you for your order!</h1>

      <div className="md:flex gap-6">
        <CartItems />
        <OrderSummary />
      </div>
      <Link className="">Back To Home</Link>
    </main>
  );
}
