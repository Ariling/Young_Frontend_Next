import { BASE_URL } from "@/config";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

interface IRequest<T, P> {
  uri: string;
  method: string;
  data?: T;
  params?: P;
}

export interface IResponse<R> {
  code: number;
  success: boolean;
  message: string;
  data: R;
}

export interface IError {
  code: number;
  success: boolean;
  message: string;
  data: null;
}

/**
 *
 * @template T - request data type
 * @template R - response data type
 * @template P - request parameter type
 *
 * @param {string} uri - server endpoint
 * @param {string} method - get, post, patch, put, delete
 * @param {T} data - data
 * @param {P} params - request parameter
 */

async function request<T, R, P>({ uri, method, data, params }: IRequest<T, P>) {
  const config: AxiosRequestConfig = {
    url: uri,
    method,
    data,
    params,
  };

  const response = await axiosInstance<T, AxiosResponse<IResponse<R>>>(config);

  return response;
}

export default request;
