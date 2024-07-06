import { BASE_URL } from "@/config";
import axios from "axios";
import request from "./request";

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
