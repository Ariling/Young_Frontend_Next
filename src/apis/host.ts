import { BASE_URL } from "@/config";
import axios from "axios";

export const getLogin = async (prop: string | null) => {
  const dataProp = {
    code: prop,
  };
  try {
    const url = `${BASE_URL}/auth/kakao/callback`;
    const data = axios.post(url, dataProp);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result?.status;
    }
    return;
  }
};
