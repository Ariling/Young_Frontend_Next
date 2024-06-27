import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoadingCompo from "../utils/LoadingCompo";
import { Text } from "@/styles/questionStyle";

const KakaoLogin = () => {
  const route = useRouter();
  let code: string | null = null;
  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code");
  }
  useEffect(() => {
    const login = async () => {
      try {
        if (code !== null) {
          alert("성공했습니다. 이제 한번 axios 연결해볼까요?");
        }
      } catch (error) {
        alert("로그인 과정에서 문제가 발생했습니다. 다시 시도해주세요");
        setTimeout(() => {
          route.back();
        }, 500);
      }
    };
    login();
  }, []);
  return (
    <LoadingCompo>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Text>로딩중</Text>
      </div>
    </LoadingCompo>
  );
};

export default KakaoLogin;
