import { SetStateAction } from "react";
import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";
import createSelectors from ".";

export interface IuserInfo {
  status: number;
  message: string;
  id?: string;
  hostName?: string;
  token?: string;
}

type TUserStore = {
  userInfo: IuserInfo;
  setInfo: (prev: SetStateAction<IuserInfo>) => void;
  resetInfo: () => void;
};

type userPersist = (
  config: StateCreator<TUserStore>,
  options: PersistOptions<TUserStore>
) => StateCreator<TUserStore>;

export const useUserStore = createSelectors(
  create<TUserStore>(
    (persist as userPersist)(
      (set, get) => ({
        userInfo: {
          status: 0,
          message: "",
          id: "",
          hostName: "",
          token: "",
        },
        setInfo: (prev: SetStateAction<IuserInfo>) => {
          prev instanceof Function
            ? set((state) => ({ userInfo: prev(state.userInfo) }))
            : set({ userInfo: prev });
        },
        resetInfo: () => {
          set({
            userInfo: {
              status: 0,
              message: "",
              id: "",
              hostName: "",
              token: "",
            },
          });
        },
      }),
      {
        name: "userStorage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
