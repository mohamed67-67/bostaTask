import axios, { AxiosResponse } from "axios";
import { deleteCookie, getCookie } from "cookies-next";

const axiosConfig = (baseURL?: string) => {
  const axiosInstance = axios.create({
    baseURL: baseURL ?? process.env.NEXT_PUBLIC_BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getCookie("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res: AxiosResponse) => {
      return Promise.resolve(res);
    },
    (error) => {
      if (error?.response?.status === 401) {
        deleteCookie("user");
        deleteCookie("token");
        if (window.location.pathname !== "/") {
          window.location.href = "/";
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default axiosConfig;
