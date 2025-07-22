import axios from "axios";

import { getNewTokens } from "@/services/token";
import { getCookie, setCookie } from "@/utils/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await getNewTokens();
      if (res?.response) {
        setCookie("accessToken", res?.response?.accessToken, 1);
        return api(originalRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
