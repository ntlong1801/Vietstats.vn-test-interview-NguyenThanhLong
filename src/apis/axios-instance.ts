'use server';

import type { AxiosError } from 'axios';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  async (error: AxiosError) => {
    const errorData = error.response?.data;

    return Promise.reject(errorData);
  },
);

export default axiosInstance;
