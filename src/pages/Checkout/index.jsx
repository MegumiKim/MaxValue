import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "../../components/OrderSummary";

function Checkout() {
  return (
    <main className="md:mx-auto px-4 my-6">
      <h1 className="text-3xl md:text-4xl mb-6">Check Out</h1>
      <div className="flex flex-col md:flex-row align-top gap-10 md:gap-16">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </main>
  );
}

export default Checkout;
