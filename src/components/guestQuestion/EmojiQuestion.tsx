import React from "react";
import GuestImage from "../utils/GuestImage";
import QuestionContent from "../layout/QuestionContent";
import { EmojiArray } from "../utils/questionArray";
import { QuestionBtn } from "@/styles/questionStyle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { ReducerProps } from "@/types/Treducer";
import { useQuestionStore } from "@/store/question";
import useGetImage from "@/query/useGetImage";

const EmojiQuestion = (props: ReducerProps) => {
  const testName = "루씨";
  const changeQuestion = useQuestionStore.use.changeQuestion();
  const imageCode = useQuestionStore.use.questionImg();
  const changeImgCode = useQuestionStore.use.changeImage();
  const { imgUrl } = useGetImage(imageCode);
  return (
    <>
      <GuestImage src={imgUrl} />
      <QuestionContent
        children2={EmojiArray.map((e, idx) => {
          return (
            <QuestionBtn
              key={e}
              onClick={() => {
                changeQuestion(1, idx);
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
          {useGetSuffix(testName, 2)}
          <br />
          이모지라면
        </>
      </QuestionContent>
    </>
  );
};

export default EmojiQuestion;
