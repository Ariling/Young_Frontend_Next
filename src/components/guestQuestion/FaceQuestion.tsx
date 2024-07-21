import React from "react";
import GuestImage from "../utils/GuestImage";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { FaceArray } from "../../constants/questionArray";
import QuestionContent from "../layout/QuestionContent";
import { useQuestionStore } from "@/store/question";
import { ReducerProps } from "@/types/Treducer";
import SurveyImageCompo from "../utils/SurveyImageCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";

const FaceQuestion = (props: ReducerProps) => {
  const info = useGetGuestRoute();
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
          {info.hostName}
          {useGetSuffix(info.hostName, 1)}
          <br />
          00상이야!{" "}
        </>
      </QuestionContent>
    </>
  );
};

export default FaceQuestion;
