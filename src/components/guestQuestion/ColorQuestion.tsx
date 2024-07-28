import React from "react";
import QuestionContent from "../common/QuestionContent";
import { QuestionBtn } from "@/styles/questionStyle";
import { ColorArray } from "../../constants/questionArray";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { ReducerProps } from "@/types/Treducer";
import { useQuestionStore } from "@/store/question";
import SurveyImageCompo from "../utils/SurveyImageCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";

// 동적 스타일링을 하려면 이렇게 미리 가져와야 한다. 빌드 시점에 미리 유틸리티 클래스를 감지해 빌딩하기 때문
const ColorObject = {
  빨간색: "text-red-600",
  노란색: "text-yellow-300",
  초록색: "text-green-600",
  파란색: "text-blue-700",
  보라색: "text-purple-700",
  분홍색: "text-pink-400",
  흰색: "text-white text-stroke-white",
  검은색: "text-black",
};

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
              className={`${ColorObject[e as keyof typeof ColorObject]}`}
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
