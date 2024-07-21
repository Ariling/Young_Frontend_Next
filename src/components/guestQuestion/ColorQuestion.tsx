import React from "react";
import QuestionContent from "../layout/QuestionContent";
import { QuestionBtn } from "@/styles/questionStyle";
import { ColorArray, ColorObject } from "../../constants/questionArray";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { ReducerProps } from "@/types/Treducer";
import { useQuestionStore } from "@/store/question";
import SurveyImageCompo from "../utils/SurveyImageCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";

const ColorQuestion = (props: ReducerProps) => {
  const info = useGetGuestRoute();
  const changeQuestion = useQuestionStore.use.changeQuestion();
  const changeImgCode = useQuestionStore.use.changeImage();
  return (
    <>
      <SurveyImageCompo />
      <QuestionContent
        children2={ColorArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              className={`${ColorObject[idx]}`}
              onClick={() => {
                changeQuestion(2, idx);
                changeImgCode(String(idx + 1), 0);
                props.dispatch({ type: "PLUS" });
              }}
            >
              {e}
            </QuestionBtn>
          );
        })}
      >
        <>
          {info.hostName}
          {useGetSuffix(info.hostName, 3)}
          <br />
          어울리는 색은...
        </>
      </QuestionContent>
    </>
  );
};

export default ColorQuestion;
