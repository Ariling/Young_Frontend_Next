import request from "@/apis/request";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export type TResultdata = {
  image: string;
  title: string;
  first: string;
  now: string;
};

interface IResult {
  message: string;
  hostId: string;
  hostName: string;
  data: TResultdata;
}

const useGetGuestResult = (hostId: string) => {
  const fetchResult = async () => {
    const response = await request<null, IResult, null>({
      uri: `/result/${hostId}`,
      method: "get",
    });

    return response.data;
  };

  const { data: resultData = {} } = useQuery<IResult>({
    queryKey: ["get-guestResult"],
    queryFn: fetchResult,
  });

  return { resultData };
};

export default useGetGuestResult;
