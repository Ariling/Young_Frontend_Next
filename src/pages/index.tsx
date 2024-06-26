import Image from "next/image";
import { Inter } from "next/font/google";
import tw, { css, styled } from "twin.macro";
import { useState } from "react";
import BG from "../images/BG.png";
import KakaoBtn from "@/components/utils/KakaoBtn";
import NicknameInput from "@/components/layout/NicknameInput";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center p-7 w-full min-h-screen`}
    >
      <Image src={BG} alt="백그라운드 사진" className="img--layout" />
      <div className="font-PartialSans text-[32px] z-10 text-center text-[#64422E] mb-16">
        내가 생각하는
        <br />
        nickname은?
      </div>
      <div className="z-10 flex flex-col justify-center items-center gap-3">
        <NicknameInput />
      </div>
      <div className="text-text-gray text-xs z-10 mt-20 font-Neo mb-1.5">
        이미 공간을 만들었다면?
      </div>
      <KakaoBtn />
    </main>
  );
}
