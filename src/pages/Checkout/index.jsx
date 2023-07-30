import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "../../components/OrderSummary";
// import ContactForm from "../../components/Form/form.jsx";

function Checkout() {
  return (
    <main className="md:mx-10 px-4">
      <h1 className="text-3xl md:text-4xl mb-6">Check Out</h1>

      <div className="md:flex align-top gap-10">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </main>
  );
}

export default Checkout;
