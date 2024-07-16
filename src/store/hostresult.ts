import { create } from "zustand";
import createSelectors from ".";
import { devtools } from "zustand/middleware";
import { SetStateAction } from "react";

// data 및 testData를 위해서 export로 처리
export interface Idata {
  guests: Array<Iguests>;
  page: number;
  total: number;
}

interface Iguests {
  id: string;
  name: string;
}

type ThostResultStore = {
  data: Idata;
  setData: (prev: SetStateAction<Idata>) => void;
};

export const useHostResultStore = createSelectors(
  create<ThostResultStore>()(
    devtools((set) => ({
      data: {
        guests: [],
        page: 1,
        total: 0,
      },
      // 이래야 functional update가 가능하다고 한다.
      setData: (prev: SetStateAction<Idata>) => {
        prev instanceof Function
          ? set((state) => ({ data: prev(state.data) }))
          : set({ data: prev });
      },
    }))
  )
);
