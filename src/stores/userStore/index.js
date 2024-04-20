import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const userStore = create(
  persist(
    (set, get) => ({
      userInfo: null,
      userToken: null,

      setUserInfo: (data) => set(() =>  ({ userInfo: data })),
      setToken: (data) => set(() =>  ({ userToken: data })),
    }),
    {
      name: "userInfo",
      storage: createJSONStorage(() => sessionStorage)
    }
));

export default userStore;