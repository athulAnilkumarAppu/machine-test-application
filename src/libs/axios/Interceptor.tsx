import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_PATH || "";

export const axiosBasicInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_PATH,
});

export const axiosPrivateInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_PATH,
});

axiosBasicInstance.interceptors.request.use(
  async (request: any) => {
    request.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return request;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosPrivateInstance.interceptors.request.use(
  async (request: any) => {
    request.headers = {
      //   Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return request;
  },
  (error: AxiosError) => Promise.reject(error)
);

const handleSuccess = (response: AxiosResponse) => {
  if (response && response.status === 200) {
    return response.data;
  }
  return Promise.reject(new Error("Response status is not 200"));
};

const handleError = async (error: AxiosError) => {
  if (error.name === "CanceledError") {
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

axiosBasicInstance.interceptors.response.use(handleSuccess, handleError);
axiosPrivateInstance.interceptors.response.use(handleSuccess, handleError);
