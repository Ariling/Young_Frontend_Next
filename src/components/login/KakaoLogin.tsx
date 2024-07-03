import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoadingCompo from "../utils/LoadingCompo";
import { Text } from "@/styles/questionStyle";
import { getLogin } from "@/apis/host";
import { IuserInfo, useUserStore } from "@/store/user";

const KakaoLogin = () => {
  const route = useRouter();
  let code: string | null = null;
  // let previousPage = "";
  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code");
    // 이전 페이지 정보를 데려와야 다르게 라우팅을 할 수가 있음.
    // previousPage = new URL(document.referrer).pathname;
  }
  const setUsesrInfo = useUserStore.use.setInfo();
  const resetUserInfo = useUserStore.use.resetInfo();
  useEffect(() => {
    console.log(code);
    const getData = async () => {
      const data = await getLogin(code);
      if (data && typeof data !== "number") {
        setUsesrInfo(data.data as IuserInfo);
        setTimeout(() => {
          const getUserInfo = useUserStore.getState().userInfo;
          console.log(getUserInfo);
          if (getUserInfo.status === 404) {
            //route.push("/signup");
            resetUserInfo();
          } else if (getUserInfo.status === 400) {
            //route.back();
            resetUserInfo();
          } else if (getUserInfo.status === 200) {
            //route.replace("/hostdeploy");
          }
        }, 2000);
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
