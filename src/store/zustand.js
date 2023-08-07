import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";

export const useStore = create(
  persist(
    (set) => ({
      cartItems: [],
      total: 0,
      totalQty: 0,
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

      changeQty: (item, newQty) =>
        set((state) => {
          const updatedCartItems = updateCartItemQty(
            state.cartItems,
            item,
            newQty
          );
          const updatedTotal = calculateTotal(updatedCartItems);
          const updatedTotalQty = countTotalQty(updatedCartItems);
          return {
            cartItems: updatedCartItems,
            total: updatedTotal,
            totalQty: updatedTotalQty,
          };
        }),

      removeFromCart: (item) =>
        set((state) => {
          const updatedCartItems = remove(state.cartItems, item);
          const updatedTotal = calculateTotal(updatedCartItems);
          const updatedTotalQty = countTotalQty(updatedCartItems);

          return {
            cartItems: updatedCartItems,
            total: updatedTotal,
            totalQty: updatedTotalQty,
          };
        }),
      clearCart: () => set({ cartItems: [], total: 0, totalQty: 0 }),
    }),
    {
      name: "cart",
      // storage: createJSONStorage(() => sessionStorage),
    }
  )
);

function updateCart(cartItems, itemToAdd, qty) {
  const itemExists = (item) => item.id === itemToAdd.id;
  if (cartItems) {
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
  } else {
    throw new Error();
  }
}

function updateCartItemQty(cartItems, itemToUpdate, newQty) {
  const itemExists = (item) => item.id === itemToUpdate.id;
  const existingItemIndex = cartItems.findIndex(itemExists);
  const updatedCartItems = [...cartItems];
  updatedCartItems[existingItemIndex] = {
    ...updatedCartItems[existingItemIndex],
    qty: newQty,
  };
  return updatedCartItems;
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

export default useStore;

// Try to combine functions

// function updateCartState(cartItems, itemToUpdate, qty, shouldRemove = false) {
//   const updatedCartItems = [...cartItems];
//   const existingCartItemIndex = cartItems.findIndex(
//     (item) => item.id === itemToUpdate.id
//   );

//   if (existingCartItemIndex === -1) {
//     return [...cartItems, { ...itemToUpdate, qty }];
//   } else if (existingCartItemIndex !== -1 && !shouldRemove) {
//     return (updatedCartItems[existingCartItemIndex] = {
//       ...updatedCartItems[existingCartItemIndex],
//       qty: updatedCartItems[existingCartItemIndex].qty + qty,
//     });
//   } else if (existingCartItemIndex !== -1 && shouldRemove) {
//     const updatedCartItems = updatedCartItems.filter(
//       (item) => item.id !== itemToUpdate.id
//     );

//     console.log("other case");
//   }
// }
