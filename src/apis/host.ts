import { BASE_URL } from "@/config";
import axios from "axios";

export const getLogin = async (code: string | null) => {
  try {
    const url = `${BASE_URL}/auth/kakao/callback`;
    const data = axios.post(url, { code: code });
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result?.status;
    }
    return;
  }
};
