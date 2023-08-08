import React from "react";
import { useStore } from "../../../store/zustand";
import CartCardCheckout from "./CartCardCheckout";

export default function CartItems() {
  const cartItems = useStore((state) => state.cartItems);
  const cartCards = cartItems.map((item) => (
    <CartCardCheckout data={item} key={item.id} />
  ));
  return (
    <div className="m-auto overflow-y-scroll md:max-h-80 my-10">
      {cartCards}
    </div>
  );
}
