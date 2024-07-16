import React from "react";
import Kakao from "@/svg/kakaologin.svg";
import { kakaoLoginURL } from "../login/loginInfo";
import { useRouter } from "next/router";

const KakaoBtn = () => {
  const startKakao = () => {
    if (typeof window !== "undefined") {
      window.location.href = kakaoLoginURL;
    }
  };
  return <Kakao className="z-10" onClick={startKakao} />;
};

export default KakaoBtn;
