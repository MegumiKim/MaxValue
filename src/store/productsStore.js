import { create } from "zustand";

export const useProductStore = create((set) => ({
  productsList: [],
  setProducts: (data) =>
    set(() => {
      return { productsList: [data] };
    }),
}));
