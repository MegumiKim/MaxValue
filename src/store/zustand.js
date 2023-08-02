import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultCart = {
  cartItems: [],
  total: 0,
  totalQty: 0,
};
export const useStore = create(
  persist(
    (set) => ({
      defaultCart,
      addToCart: (item, qty = 1) =>
        set((state) => {
          const updatedCartItems = updateCart(state.cartItems, item, qty);
          const updatedTotal = calculateTotal(updatedCartItems);
          const updatedTotalQty = countTotalQty(updatedCartItems);

          return {
            cartItems: updatedCartItems,
            total: updatedTotal,
            totalQty: updatedTotalQty,
          };
        }),
      clearCart: () => set(defaultCart),
      removeFromCart: (item) =>
        set((state) => {
          const updatedCartItems = remove(state.cartItems, item);
          const updatedTotal = calculateTotal(updatedCartItems);
          const updatedTotalQty = countTotalQty(updatedCartItems);
          console.log(updatedTotal);
          return {
            cartItems: updatedCartItems,
            total: updatedTotal,
            totalQty: updatedTotalQty,
          };
        }),
    }),
    {
      name: "cart",
      // storage: createJSONStorage(() => sessionStorage),
    }
  )
);

function updateCart(cartItems, itemToAdd, qty) {
  const itemExists = (item) => item.id === itemToAdd.id;
  const existingItemIndex = cartItems.findIndex(itemExists);

  if (existingItemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex] = {
      ...updatedCartItems[existingItemIndex],
      qty: updatedCartItems[existingItemIndex].qty + qty,
    };

    return updatedCartItems;
  }
  return [...cartItems, { ...itemToAdd, qty }];
}

function remove(cartItems, itemToRemove) {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
}

function calculateTotal(cartItems) {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.qty,
    0
  );
}

function countTotalQty(cartItems) {
  return cartItems.reduce((totalQty, cartItem) => totalQty + cartItem.qty, 0);
}
