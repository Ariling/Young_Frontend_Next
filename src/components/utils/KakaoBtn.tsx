import React from "react";
import Kakao from "@/svg/kakaologin.svg";
import { kakaoLoginURL } from "@/constants/loginInfo";

const KakaoBtn = () => {
  const startKakao = () => {
    if (typeof window !== "undefined") {
      window.location.href = kakaoLoginURL;
    }
  };
  return <Kakao className="z-10" onClick={startKakao} />;
};

export default KakaoBtn;
