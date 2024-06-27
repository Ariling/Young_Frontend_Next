import React from "react";
import Kakao from "@/svg/kakaologin.svg";
import { signIn } from "next-auth/react";

const KakaoBtn = () => {
  const startKakao = async () => {
    await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  return <Kakao className="z-10" onClick={startKakao} />;
};

export default KakaoBtn;
