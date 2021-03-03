import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { PagingData, Serializable, APIError } from '../../models';
import { sessionStorageService } from '../session-storage.service';

type errorHandlerFunc = (error: any) => any;

let apiErrorHandler: errorHandlerFunc;

export const API = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_ENDPOINT}`,
  withCredentials: false,
  timeout: 300000,
});

// キャンセルできるリクエスト対応
let cancelTokenSource = axios.CancelToken.source();

export const callRequests = (message: string = 'unauthorized') => {
  console.warn(`Cancel all requests after${message}`);
  cancelTokenSource.cancel();
};

export const restoreRequests = () => {
  console.log(`%c Restore all requests`, 'color: #52c41a');
  cancelTokenSource = axios.CancelToken.source();
};

export const setApiErrorHandler = (handler: errorHandlerFunc) => {
  apiErrorHandler = handler;
};

API.interceptors.request.use(
  (config) => {
    // Requestごとにjwtをヘッダーにセットし
    config.headers.Authorization = `Bearer xx`;
    config.params = config.params || {};
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(undefined, (err) => {
  if (apiErrorHandler) {
    apiErrorHandler(err);
  }
  if (err.response) {
    return Promise.reject(err.response.data as APIError);
  } else {
    return Promise.reject(err);
  }
});

export class ApiService {
  async get<T extends Serializable<T>>(type: { new (): T }, path: string, params: any): Promise<T> {
    return API.get<T>(path, { params: params, cancelToken: cancelTokenSource.token }).then((value) => {
      return new type().deserialize(value.data);
    });
  }

  async getDynamic<D>(path: string, params: any): Promise<D> {
    return API.get<D>(path, { params: params, cancelToken: cancelTokenSource.token }).then((value) => {
      return value.data;
    });
  }

  async getList<T extends Serializable<T>>(type: { new (): T }, path: string, params: any): Promise<T[]> {
    interface ListData {}
    return API.get<ListData>(path, { params: params, cancelToken: cancelTokenSource.token }).then((value: AxiosResponse) => {
      return value.data.map((d: any) => new type().deserialize(d));
    });
  }

  async getPagingData<T extends Serializable<T>>(type: { new (): T }, path: string, params: any, postMethod: boolean = false): Promise<PagingData<T>> {
    let onSuccess = (value: AxiosResponse) => {
      let result = new PagingData<T>();
      result.data = value.data.data.map((v: any) => new type().deserialize(v));
      result.totalRecords = value.data.totalRecords;
      return result;
    };
    if (postMethod) {
      return API.post<PagingData<T>>(path, { params: params, cancelToken: cancelTokenSource.token }).then(onSuccess);
    }
    return API.get<PagingData<T>>(path, { params: params, cancelToken: cancelTokenSource.token }).then(onSuccess);
  }

  async delete<T extends Serializable<T>>(_: { new (): T }, path: string, params: any): Promise<T> {
    return API.delete<T>(path, { data: params }).then((value) => value.data);
  }

  async head(path: string, params: any): Promise<any> {
    return API.head(path, { params }).then((value) => value.data);
  }

  async post<T extends Serializable<T>>(type: { new (): T }, path: string, data?: any): Promise<T> {
    return API.post<T>(path, data).then((value) => {
      return new type().deserialize(value.data);
    });
  }

  async put<T extends Serializable<T>>(type: { new (): T }, path: string, data?: any): Promise<T> {
    return API.put<T>(path, data).then((value) => {
      return new type().deserialize(value.data);
    });
  }

  async patch<T extends Serializable<T>>(type: { new (): T }, path: string, data?: any): Promise<T> {
    return API.patch<T>(path, data).then((value) => {
      return new type().deserialize(value.data);
    });
  }

  async postFile<T extends Serializable<T>>(type: { new (): T }, path: string, formData: FormData): Promise<T> {
    return API.post<T>(path, formData).then((value) => {
      return new type().deserialize(value.data);
    });
  }

  async putFile<T extends Serializable<T>>(type: { new (): T }, path: string, formData: FormData): Promise<T> {
    return API.put<T>(path, formData).then((value) => {
      return new type().deserialize(value.data);
    });
  }

  async downloadFile(path: string, params: any): Promise<Blob> {
    return API.get(path, {
      params: params,
      responseType: 'blob',
    } as AxiosRequestConfig).then((res) => new Blob([res.data]));
  }
}
