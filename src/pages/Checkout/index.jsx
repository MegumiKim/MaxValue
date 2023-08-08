import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "../../components/OrderSummary";
import CartCardCheckout from "./CartCardCheckout";
import { useStore } from "../../store/zustand";

function Checkout() {
  const cartItems = useStore((state) => state.cartItems);

  const cartCards = cartItems.map((item) => (
    <CartCardCheckout data={item} key={item.id} />
  ));
  return (
    <main className="md:mx-auto px-4 mt-6 mb-auto md:pb-0 md:max-w-screen-xl lg:max-w-screen-2xl">
      <h1 className="text-3xl md:text-4xl mb-6 font-bold">Check Out</h1>
      <div className="flex flex-col md:flex-row align-top gap-16 md:gap-16">
        <CheckoutForm />
        <div className="m-auto">
          <OrderSummary />
          <div className="md:order-1 mt-10">{cartCards}</div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
