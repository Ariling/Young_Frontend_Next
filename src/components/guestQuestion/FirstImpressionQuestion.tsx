import React from "react";
import QuestionContent from "../common/QuestionContent";
import { firstImpressionArray } from "../../constants/questionArray";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { useQuestionStore } from "@/store/question";
import { ReducerProps } from "@/types/Treducer";
import SurveyImageCompo from "../utils/SurveyImageCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";

const FirstImpressionQuestion = (props: ReducerProps) => {
  const info = useGetGuestRoute();
  const changeQuestion = useQuestionStore.use.changeQuestion();
  return (
    <>
      <SurveyImageCompo />
      <QuestionContent
        children2={firstImpressionArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(3, idx);
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
          {useGetSuffix(info.hostName, 4)}
          <br />
          처음 봤을 때
        </>
      </QuestionContent>
    </>
  );
};

export default FirstImpressionQuestion;
