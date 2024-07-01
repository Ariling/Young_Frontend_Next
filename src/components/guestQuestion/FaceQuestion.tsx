import React from "react";
import GuestImage from "../utils/GuestImage";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { FaceArray } from "../utils/questionArray";
import QuestionContent from "../layout/QuestionContent";
import { useQuestionStore } from "@/store/question";
import { ReducerProps } from "@/types/Treducer";
import SurveyImageCompo from "../utils/SurveyImageCompo";

const FaceQuestion = (props: ReducerProps) => {
  const testName = "루씨";
  const changeQuestion = useQuestionStore.use.changeQuestion();
  const changeImgCode = useQuestionStore.use.changeImage();
  return (
    <>
      <SurveyImageCompo />
      <QuestionContent
        children2={FaceArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(0, idx);
                changeImgCode(String(idx + 1), 2);
                props.dispatch({ type: "PLUS" });
              }}
            >
              {e}
            </QuestionBtn>
          );
        })}
      >
        <>
          {testName}
          {useGetSuffix(testName, 1)}
          <br />
          00상이야!{" "}
        </>
      </QuestionContent>
    </>
  );
};

export default FaceQuestion;
