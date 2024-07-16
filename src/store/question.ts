import { create } from "zustand";
import createSelectors from ".";
import { devtools } from "zustand/middleware";

type TQuestionStore = {
  questionArray: Array<number>;
  questionImg: string;
  changeQuestion: (num: number, idx: number) => void;
  changeImage: (num: string, idx: number) => void;
  resetQuestion: () => void;
};

function replaceCharAt(str: string, index: number, replacement: string) {
  return (
    str.substr(0, index) + replacement + str.substr(index + replacement.length)
  );
}

export const useQuestionStore = createSelectors(
  create<TQuestionStore>()(
    devtools((set) => ({
      questionArray: [0, 0, 0, 0, 0],
      questionImg: "000",
      changeQuestion: (num: number, idx: number) =>
        set((state) => ({
          questionArray: state.questionArray.map((item, index) =>
            index === num ? idx + 1 : item
          ),
        })),
      changeImage: (num: string, idx: number) =>
        set((state) => ({
          questionImg: replaceCharAt(state.questionImg, idx, num),
        })),
      resetQuestion: () => {
        set({
          questionArray: [0, 0, 0, 0, 0],
        });
      },
    }))
  )
);
