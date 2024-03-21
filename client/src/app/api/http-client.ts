import axios from "axios";

import { API_URL } from "@shared/constants/main";
import { getAuthData, saveAuthData } from "@shared/helpers/auth-storage";
import authService from "./services/auth.service";

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (config) => {
    const customConfig = { ...config };
    const { accessToken } = getAuthData();

    if (accessToken) {
      customConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    return customConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken } = getAuthData();

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const {
          accessToken: createdAccessToken,
          refreshToken: createdRefreshToken,
        } = await authService.refresh(refreshToken);

        saveAuthData(createdAccessToken, createdRefreshToken);

        return httpClient(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  },
);
