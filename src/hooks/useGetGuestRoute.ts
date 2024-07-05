import { Tguest } from "@/types/Tguest";
import { useRouter } from "next/router";
import React from "react";

const useGetGuestRoute = () => {
  const route = useRouter();
  const props: Tguest = {
    id: route.query.hostId as string,
    guestName: decodeURIComponent(route.query.nickname as string),
    hostName: decodeURIComponent(route.query.hostname as string),
  };
  return props;
};

export default useGetGuestRoute;
