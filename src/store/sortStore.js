import { create } from "zustand";

export const useSortStore = create((set) => ({
  sort: "",
  setSortBy: (data) =>
    set(() => {
      return { sort: data };
    }),
}));
