import { createContext } from "react";

export const CartContext = createContext();
export const MyCart = (props) => {
  const initialCartState = {
    item: [],
    total: 0,
  };
};
