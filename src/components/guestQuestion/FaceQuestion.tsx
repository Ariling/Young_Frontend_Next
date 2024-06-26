import React from "react";
import GuestImage from "../utils/GuestImage";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { FaceArray } from "../utils/questionArray";
import QuestionContent from "../layout/QuestionContent";
import { useQuestionStore } from "@/store/question";
import { ReducerProps } from "@/types/Treducer";

const FaceQuestion = (props: ReducerProps) => {
  const testSrc =
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg";
  const testName = "루씨";
  const changeQuestion = useQuestionStore.use.changeQuestion();
  return (
    <>
      <GuestImage src={testSrc} />
      <QuestionContent
        children2={FaceArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(0, idx);
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
