import { create } from "zustand";
import createSelectors from ".";
import { devtools } from 'zustand/middleware'


type TQuestionStore = {
    questionArray : Array<number>;
    changeQuestion : (num : number, idx : number) => void;
}

export const useQuestionStore = createSelectors(create<TQuestionStore>()(
    devtools((set) => ({
        questionArray : [0,0,0,0,0],
        changeQuestion : (num : number, idx : number) => set((state)=>({
           questionArray : state.questionArray.map((item, index) => 
           index === num ? idx + 1 : item)
        }))
    }))
))