import { ContentBox } from "@/styles/questionStyle";
import React, { ReactNode } from "react";

type prop = {
  children: ReactNode;
  children2: ReactNode;
};

const QuestionContent = (prop: prop) => {
  return (
    <>
      <ContentBox>
        <div className="mt-2 font-Neo font-bold text-[20px] text-center">
          {prop.children}
        </div>
        <div className="grid grid-cols-2 gap-4">{prop.children2}</div>
      </ContentBox>
    </>
  );
};

export default QuestionContent;
