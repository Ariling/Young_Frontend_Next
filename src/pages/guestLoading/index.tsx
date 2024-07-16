import LoadingCompo from "@/components/utils/LoadingCompo";
import useGetGuestRoute from "@/hooks/useGetGuestRoute";
import { useGetSuffix } from "@/hooks/useGetSuffix";
import { useLoadingTime } from "@/hooks/useLoadingTime";
import { Text } from "@/styles/questionStyle";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const loading = useLoadingTime(3000);
  const route = useRouter();
  const info = useGetGuestRoute();
  useEffect(() => {
    if (loading) {
      route.push(
        `/guestResult?hostId=${info.id}&nickname=${info.guestName}&hostname=${info.hostName}`
      );
    }
  }, [loading]);
  return (
    <LoadingCompo>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Text>
          {info.guestName}
          {useGetSuffix(info.guestName, 2)}
        </Text>
        <Text>생각하는</Text>
        <Text>{info.hostName}</Text>
        <Text>만드는 중</Text>
      </div>
    </LoadingCompo>
  );
};

export default Index;
