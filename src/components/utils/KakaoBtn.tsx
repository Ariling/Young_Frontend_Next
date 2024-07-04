import React from "react";
import Kakao from "@/svg/kakaologin.svg";
import { signIn } from "next-auth/react";
import { kakaoLoginURL } from "../login/loginInfo";
import { useRouter } from "next/router";

const KakaoBtn = () => {
  const router = useRouter();
  const startKakao = () => {
    let currentPage = router.pathname;
    if (typeof window !== "undefined") {
      window.location.href = kakaoLoginURL;
      // 임시 저장, 페이지에 따라 다르게 이동 처리를 해야되기 때문
      localStorage.setItem("page", currentPage);
    }
  };
  return <Kakao className="z-10" onClick={startKakao} />;
};

export default KakaoBtn;
