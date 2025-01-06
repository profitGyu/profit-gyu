import axios from 'axios';

import type { IBaseResponse } from './type';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ROUTES } from 'routes';

const REQUEST_TIMEOUT = 20000;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: REQUEST_TIMEOUT,
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<IBaseResponse>) => {
    const originalRequest = error.config;

    // 토큰이 만료된 경우 (401 에러)
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      originalRequest
    ) {
      if (error.response?.data) {
        // 기타 에러 처리
        return Promise.reject(error.response.data);
      }
    }
    return Promise.reject(error);
  },
);

export function get<T>(url: string, config?: AxiosRequestConfig) {
  return instance.get<T>(url, config);
}

export function post<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
  return instance.post<T, AxiosResponse<T>, D>(url, data, config);
}

export function put<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
  return instance.put<T, AxiosResponse<T>, D>(url, data, config);
}

export function patch<T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
) {
  return instance.patch<T, AxiosResponse<T>, D>(url, data, config);
}

export function del<T>(url: string, config?: AxiosRequestConfig) {
  return instance.delete<T>(url, config);
}
