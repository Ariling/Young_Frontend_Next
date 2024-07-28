import { axiosInstance, BASE_URL } from "@/config";
import axios from "axios";
import request from "./request";
import { useUserStore } from "@/store/user";
import { useHostResultStore } from "@/store/hostresult";

export const getLogin = async (prop: string | null) => {
  const dataProp = {
    code: prop,
  };
  try {
    const url = `${BASE_URL}/auth/kakao/callback`;
    const data = axios.post(url, dataProp);
    return data;
  } catch (error) {
    return;
  }
};

interface ISignupProp {
  id: string;
  name: string;
}

type TSignupResponse = {
  message: string;
  data: {
    id: string;
    name: string;
    token: string;
  };
};

export const postSignup = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  const response = await request<ISignupProp, TSignupResponse, null>({
    uri: "/auth/signup",
    method: "post",
    data: {
      id: id,
      name: name,
    },
  });

  return response.data;
};

export const useGetHostResult = async () => {
  const data = useUserStore.getState().userInfo;
  const response = await axiosInstance.get(`/data/${data.id}`, {
    headers: {
      Authorization: data.token,
    },
  });

  return response.data;
};

export const useGetPageResult = async () => {
  const data = useUserStore.getState().userInfo;
  const page = useHostResultStore.getState().data;
  const response = await axiosInstance.get(
    `/guests/${data.id}?page=${page.page}`,
    {
      headers: {
        Authorization: data.token,
      },
    }
  );

  return response.data;
};

export const useGetStatistic = async () => {
  const data = useUserStore.getState().userInfo;
  const response = await axiosInstance.get(`/stats/${data.id}`, {
    headers: {
      Authorization: data.token,
    },
  });

  return response.data;
};

export const useGetHostGuestResult = async () => {
  const data = useUserStore.getState().userInfo;
  const nickname = useUserStore.getState().userGuest;
  const response = await axiosInstance.get(`/data/${data.id}/${nickname}`, {
    headers: {
      Authorization: data.token,
    },
  });
  return response.data;
};
