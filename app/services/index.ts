import axios, { AxiosRequestConfig, Axios } from "axios"; // 추가
import { APIResponse } from "../types/response";

// axios 인스턴스 생성
const client: Axios = axios.create({
  baseURL: "http://3.36.81.141:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  function (config) {
    // Do something!
    return config;
  },
  function (error) {
    // Do something!
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    // Do something!
    return response && response.data;
  },
  function (error) {
    // Do something!
    if (error.response.status === 417) {
      location.href = `${process.env.ACCOUNTS_URL}/logout`;
      return;
    }
    return Promise.reject(error);
  }
);

export default client;
