import { UtilBtn } from "@/styles/buttonStyle";
import React from "react";
import Home from "@/svg/home.svg";
import NicknameTitle from "../utils/NicknameTitle";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import GuestResultLayout from "../layout/GuestResultLayout";
import { useRouter } from "next/router";

const GuestResultCompo = ({
  nickname,
  hostId,
}: {
  nickname: string;
  hostId: string;
}) => {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="font-Neo text-center font-bold text-[#64422E] mt-9 text-base mb-3">
          다른 친구들이 본 {nickname}
          {useGetSuffix(nickname, 2)} 궁금하다면?
        </div>
        <UtilBtn
          isUrl={false}
          onClick={() => router.push(`/guestResult/${hostId}`)}
        >
          결과 보러 가기
        </UtilBtn>
      </div>
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

export default GuestResultCompo;
