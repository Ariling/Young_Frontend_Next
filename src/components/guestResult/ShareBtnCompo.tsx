import { UtilBtn } from "@/styles/buttonStyle";
import { useRouter } from "next/router";
import Home from "@/svg/home.svg";
import React from "react";

const ShareBtnCompo = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="font-Neo text-center font-bold text-[#64422E] mt-[100px] text-base mb-3">
          친구가 보는 내가 궁금하다면?
        </div>
        <UtilBtn isUrl={false} onClick={() => router.push("/login")}>
          물어보러가기
          <Home />
        </UtilBtn>
      </div>
    </>
  );
};

export default ShareBtnCompo;
