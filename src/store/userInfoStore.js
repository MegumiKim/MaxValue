import { create } from "zustand";

export const useUserInfoStore = create((set) => ({
  userInfo: [],
  setUserInfo: (data) =>
    set(() => {
      console.log(data);

      return { userInfo: data };
    }),
}));
