import { Text } from "@/styles/questionStyle";
import React from "react";
import { FadeLoader } from "react-spinners";

const ProgressCompo = () => {
  return (
    <main className="bg--layout">
      <div className="flex flex-col justify-center p-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-20">
        <FadeLoader color="#64422E" />
        <Text>로딩중</Text>
      </div>
    </main>
  );
};

export default ProgressCompo;
