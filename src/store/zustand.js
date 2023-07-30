import { create } from "zustand";

export const useStore = create((set) => ({
  cartItems: [],
  total: 0,
  totalQty: 0,
  addToCart: (item, qty = 1) =>
    set((state) => {
      console.log(state.cartItems);

      const updatedCartItems = updateCart(state.cartItems, item, qty);
      const updatedTotal = calculateTotal(updatedCartItems);
      const updatedTotalQty = countTotalQty(updatedCartItems);

      return {
        cartItems: updatedCartItems,
        total: updatedTotal,
        totalQty: updatedTotalQty,
      };

      // const existingItemIndex = state.cartItems.findIndex(
      //   (cartItem) => cartItem.id === item.id
      // );

      // if (existingItemIndex !== -1) {
      //   const updatedCartItems = [...state.cartItems];
      //   updatedCartItems[existingItemIndex] = {
      //     ...updatedCartItems[existingItemIndex],
      //     qty: updatedCartItems[existingItemIndex].qty + qty,
      //   };
      //   return {
      //     total: state.total + item.price,
      //     cartItems: updatedCartItems,
      //   };
      // } else {
      //   return {
      //     total: state.total + item.price,
      //     cartItems: [...state.cartItems, { ...item, qty }],
      //   };
      // }
    }),
  clearCart: () => set({ cartItems: [] }),
}));

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

function calculateTotal(cartItems) {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.qty,
    0
  );
}

function countTotalQty(cartItems) {
  return cartItems.reduce((totalQty, cartItem) => totalQty + cartItem.qty, 0);
}
