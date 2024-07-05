import { useGetSuffix } from "@/hooks/useGetSuffix";
import React from "react";
import QuestionContent from "../layout/QuestionContent";
import { presentImpressionArray } from "../utils/questionArray";
import { QuestionBtn } from "@/styles/questionStyle";
import { ReducerProps } from "@/types/Treducer";
import { useQuestionStore } from "@/store/question";
import { useRouter } from "next/router";
import SurveyImageCompo from "../utils/SurveyImageCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";

const PresentImpressionQuestion = (props: ReducerProps) => {
  const route = useRouter();
  const info = useGetGuestRoute();
  const changeQuestion = useQuestionStore.use.changeQuestion();
  const questionArray = useQuestionStore.use.questionArray();
  return (
    <>
      <SurveyImageCompo />
      <QuestionContent
        children2={presentImpressionArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(4, idx);
                route.push(
                  `/guestLoading?hostId=${info.id}&nickname=${info.guestName}&hostname=${info.hostName}`
                );
              }}
            >
              {e}
            </QuestionBtn>
          );
        })}
      >
        <>
          지금 내가 생각하는
          <br />
          {info.hostName}
          {useGetSuffix(info.hostName, 5)}...
        </>
      </QuestionContent>
    </>
  );
};

export default PresentImpressionQuestion;
