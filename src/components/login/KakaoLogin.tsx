import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoadingCompo from "../utils/LoadingCompo";
import { Text } from "@/styles/questionStyle";
import { getLogin } from "@/apis/host";
import { IuserInfo, useUserStore } from "@/store/user";

const KakaoLogin = () => {
  const route = useRouter();
  let code: string | null = null;
  let previousPage = "";
  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code");
    // 이전 페이지 정보를 데려와야 다르게 라우팅을 할 수가 있음.
    previousPage = new URL(document.referrer).pathname;
  }
  const setUsesrInfo = useUserStore.use.setInfo();
  useEffect(() => {
    console.log(previousPage);
    const getData = async () => {
      const data = await getLogin(code);
      if (data === 400) {
        alert("에러가 일어났습니다 다시 시도해주세요");
        setTimeout(() => {
          route.back();
        }, 500);
      } else if (data === 404) {
        setTimeout(() => {
          route.replace("/signup");
        }, 500);
      } else if (data && typeof data !== "number") {
        setUsesrInfo(data.data as IuserInfo);
        setTimeout(() => {
          route.replace("/hostResult");
        }, 500);
      } else {
        setTimeout(() => {
          route.back();
        }, 500);
      }
    };
    getData();
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
