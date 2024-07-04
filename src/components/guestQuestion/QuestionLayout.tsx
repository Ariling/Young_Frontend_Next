import React, { useReducer } from "react";
import FaceQuestion from "./FaceQuestion";
import EmojiQuestion from "./EmojiQuestion";
import ColorQuestion from "./ColorQuestion";
import FirstImpressionQuestion from "./FirstImpressionQuestion";
import PresentImpressionQuestion from "./PresentImpressionQuestion";
import { reducer } from "@/types/Treducer";

const QuestionLayout = () => {
  const [num, dispatch] = useReducer(reducer, 1);
  const getComponent = (num: number) => {
    if (num === 1) return <FaceQuestion state={num} dispatch={dispatch} />;
    if (num === 2) return <EmojiQuestion state={num} dispatch={dispatch} />;
    if (num === 3) return <ColorQuestion state={num} dispatch={dispatch} />;
    if (num === 4)
      return <FirstImpressionQuestion state={num} dispatch={dispatch} />;

    return <PresentImpressionQuestion state={num} dispatch={dispatch} />;
  };
  return (
    <main className="bg--layout flex flex-col items-center justify-center p-7">
      {getComponent(num)}
    </main>
  );
};

export default QuestionLayout;
