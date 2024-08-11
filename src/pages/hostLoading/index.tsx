import LoadingCompo from "@/components/utils/LoadingCompo";
import { useLoadingTime } from "@/hooks/useLoadingTime";
import { useUserStore } from "@/store/user";
import { Text } from "@/styles/questionStyle";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const route = useRouter();
  const loading = useLoadingTime(3000);
  const userInfo = useUserStore.use.userInfo();
  useEffect(() => {
    if (loading) {
      route.replace(`/hostdeploy?name=${userInfo.hostName}`);
    }
  }, [loading]);
  return (
    <LoadingCompo>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Text>내 공간 생성 완료!</Text>
      </div>
    </LoadingCompo>
  );
};

export default Index;
