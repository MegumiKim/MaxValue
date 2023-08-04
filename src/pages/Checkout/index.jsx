import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "../../components/OrderSummary";
import CartItemsCheckout from "../../components/CartItems/CheckoutVersion/CartItemsCheckout";

function Checkout() {
  return (
    <main className="md:mx-auto px-4 my-6 min-h-screen">
      <h1 className="text-3xl md:text-4xl mb-6 font-bold">Check Out</h1>
      <div className="flex flex-col md:flex-row align-top gap-16 md:gap-16">
        <CheckoutForm />
        <div className="w-min m-auto">
          <CartItemsCheckout />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}

export default Checkout;
