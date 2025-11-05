// src/lib/axiosInstance.ts
import axios, {  AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const PUBLIC_ROUTES = ['/signIn', '/signUp', '/forgot-password'];
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor — Add token before each request
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (!PUBLIC_ROUTES.some(route => config.url?.includes(route))) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 🔹 Response Interceptor — Handle global errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — maybe redirect to login?");
      // optional: window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
