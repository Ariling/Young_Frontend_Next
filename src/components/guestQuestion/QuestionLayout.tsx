import React, { useEffect, useReducer } from "react";
import FaceQuestion from "./FaceQuestion";
import EmojiQuestion from "./EmojiQuestion";
import ColorQuestion from "./ColorQuestion";
import FirstImpressionQuestion from "./FirstImpressionQuestion";
import PresentImpressionQuestion from "./PresentImpressionQuestion";
import { reducer } from "@/types/Treducer";
import { useRouter } from "next/router";
import { PrevBtn } from "@/styles/questionStyle";
import { useQuestionStore } from "@/store/question";

const QuestionLayout = () => {
  const [num, dispatch] = useReducer(reducer, 1);
  const changeQuestion = useQuestionStore.use.changeQuestion();
  const changeImgCode = useQuestionStore.use.changeImage();
  const getComponent = (num: number) => {
    if (num === 1) return <FaceQuestion state={num} dispatch={dispatch} />;
    if (num === 2) return <EmojiQuestion state={num} dispatch={dispatch} />;
    if (num === 3) return <ColorQuestion state={num} dispatch={dispatch} />;
    if (num === 4)
      return <FirstImpressionQuestion state={num} dispatch={dispatch} />;

    return <PresentImpressionQuestion state={num} dispatch={dispatch} />;
  };
  const route = useRouter();
  useEffect(() => {
    const id = route.query.hostId;
    const guestName = route.query.nickname;
    const hostName = route.query.hostname;
    if (!id || !guestName || !hostName) {
      alert("닉네임 설정 및 로그인을 진행해주세요");
      route.back();
    }
  }, []);
  return (
    <main className="bg--layout flex flex-col items-center justify-center p-7">
      {getComponent(num)}
      {num !== 1 ? (
        <PrevBtn
          className="mt-4"
          onClick={() => {
            changeQuestion(num - 1, 0);
            if (2 <= num && num <= 4) {
              changeImgCode(String(0), 4 - num);
            }
            dispatch({ type: "MINUS" });
          }}
        >
          이전으로
        </PrevBtn>
      ) : null}
    </main>
  );
};

export default QuestionLayout;
