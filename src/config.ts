import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const IMG_CALL_URL = process.env.NEXT_PUBLIC_IMG_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
