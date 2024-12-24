import axios from 'axios';

import type { IBaseResponse } from './type';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken, removeToken, saveToken } from '@utils/common/auth';
import { ROUTES } from 'routes';

const REQUEST_TIMEOUT = 20000;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: REQUEST_TIMEOUT,
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token?.access_token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
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
      const token = getToken();
      // if (!token?.refresh_token) {
      //   removeToken();
      //   window.location.href = ROUTES.AUTH.login;
      //   return Promise.reject(error);
      // }

      try {
        // 리프레시 토큰으로 새로운 액세스 토큰 발급 요청
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_API}/account/token/refresh`,
          { refresh_token: token?.refresh_token },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${token?.refresh_token}`,
            },
          },
        );

        const { access_token, refresh_token } = response.data;

        // 새로운 토큰 저장
        saveToken({ access_token, refresh_token });

        // 실패했던 요청 재시도
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
        }
        return axios(originalRequest);
      } catch (refreshError) {
        // 리프레시 토큰도 만료된 경우
        // removeToken();
        // window.location.href = ROUTES.AUTH.login;
        return Promise.reject(refreshError);
      }
    }

    // 기타 에러 처리
    if (error.response?.data) {
      return Promise.reject(error.response.data);
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
