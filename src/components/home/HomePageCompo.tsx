import Image from "next/image";
import BG from "@/images/BG.png";
import React from "react";
import NicknameInput from "../layout/NicknameInput";
import KakaoBtn from "../utils/KakaoBtn";
import { useGetSuffix } from "@/hooks/useGetSuffix";

const HomePageCompo = ({ hostName }: { hostName: string }) => {
  return (
    <>
      <Image src={BG} alt="백그라운드 사진" className="img--layout" priority />
      <div className="font-PartialSans text-[32px] z-10 text-center text-[#64422E] mb-16">
        내가 생각하는
        <br />
        {hostName}
        {useGetSuffix(hostName, 1)}?
      </div>
      <div className="z-10 flex flex-col justify-center items-center gap-3">
        <NicknameInput />
      </div>
      <div className="text-text-gray text-xs z-10 mt-20 font-Neo mb-1.5">
        이미 공간을 만들었다면?
      </div>
      <KakaoBtn />
    </>
  );
};

export default HomePageCompo;
