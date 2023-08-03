import { create } from "zustand";

export const useFilterStore = create((set) => ({
  category: "",
  setCategory: (data) =>
    set(() => {
      return { category: data };
    }),
}));
