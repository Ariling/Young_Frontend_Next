import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoadingCompo from "../utils/LoadingCompo";
import { Text } from "@/styles/questionStyle";
import { getLogin } from "@/apis/host";
import { IuserInfo, useUserStore } from "@/store/user";
import axios from "axios";

const KakaoLogin = () => {
  const route = useRouter();
  let code: string | null = null;
  if (typeof window !== "undefined") {
    code = new URL(window.location.href).searchParams.get("code");
  }
  const setUsesrInfo = useUserStore.use.setInfo();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getLogin(code);
        if (data && typeof data === "object") {
          setUsesrInfo(data.data as IuserInfo);
          setTimeout(() => {
            const pageRoute = localStorage.getItem("page");
            if (pageRoute === "/") {
              route.replace("/guestQuestion");
            } else {
              route.replace("/hostdeploy");
            }
          }, 2000);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const data = error.response.status;
          if (data === 404 || data === 400) {
            route.replace("/signup");
          } else {
            console.log("왜 에러가 뜰까..?", data);
          }
        }
      }
    };
    getData();
    // 되든 안되든 삭제시키기
    localStorage.removeItem("page");
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
