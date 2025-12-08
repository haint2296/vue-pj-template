// custom-instance.ts

import Axios from 'axios';

import type { AxiosError, AxiosRequestConfig } from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173';

export const AXIOS_INSTANCE = Axios.create({ baseURL: BASE_URL });

AXIOS_INSTANCE.interceptors.request.use((config) => {
  if (!import.meta.env.DEV && !config.url?.includes('localhost')) {
    alert('You are not allowed to access this resource');
    throw new Error('You are not allowed to access this resource');
  }
  return config;
});

// add a second `options` argument here if you want to pass extra options to each generated query
export const customInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data);

  return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
