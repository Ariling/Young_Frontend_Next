import React from "react";
import Kakao from "@/svg/kakaologin.svg";
import { kakaoLoginURL } from "../login/loginInfo";
import { useRouter } from "next/router";

const KakaoBtn = ({ hostName }: { hostName: string }) => {
  const router = useRouter();
  const startKakao = () => {
    let currentPage = router.pathname;
    const hostId = router.query.hostId as string | undefined;
    if (typeof window !== "undefined") {
      window.location.href = kakaoLoginURL;
      // 임시 저장, 페이지에 따라 다르게 이동 처리를 해야되기 때문
      localStorage.setItem("page", currentPage);
      // 테스트할 때 또 필요한 거를 설정하면 되기 때문
      if (currentPage === "/") {
        localStorage.setItem("hostId", hostId as string);
        localStorage.setItem("hostName", hostName);
      }
    }
  };
  return <Kakao className="z-10" onClick={startKakao} />;
};

export default KakaoBtn;
