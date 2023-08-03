import React from "react";
import { useStore } from "../../store/zustand";
import CartCard from "./CartCard";

export default function CartItems() {
  const cartItems = useStore((state) => state.cartItems);
  const cartCards = cartItems.map((item) => (
    <CartCard data={item} key={item.id} />
  ));
  return <div className="m-auto">{cartCards}</div>;
}
