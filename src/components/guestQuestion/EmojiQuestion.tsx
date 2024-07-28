import React from "react";
import QuestionContent from "../common/QuestionContent";
import { EmojiArray } from "../../constants/questionArray";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { ReducerProps } from "@/types/Treducer";
import { useQuestionStore } from "@/store/question";
import SurveyImageCompo from "../utils/SurveyImageCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";

const EmojiQuestion = (props: ReducerProps) => {
  const info = useGetGuestRoute();
  const changeQuestion = useQuestionStore.use.changeQuestion();
  const changeImgCode = useQuestionStore.use.changeImage();
  return (
    <>
      <SurveyImageCompo />
      <QuestionContent
        children2={EmojiArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(1, idx);
                changeImgCode(String(idx + 1), 1);
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
          {useGetSuffix(info.hostName, 2)}
          <br />
          이모지라면
        </>
      </QuestionContent>
    </>
  );
};

export default EmojiQuestion;
