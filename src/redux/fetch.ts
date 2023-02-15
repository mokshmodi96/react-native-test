import axios, {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import {AppThunk} from '../types/redux.types';
import {FetchResponse, FetchResponseError} from '../types/fetch.types';

export const AxiosInstance = axios.create({
  baseURL: Config.API_URL,
});

export const fetch = async <T>(
  config: AxiosRequestConfig,
): Promise<FetchResponse<T>> => {
  const result: FetchResponse<T> = {
    data: undefined,
    errors: null,
    statusCode: null,
    errorMessage: null,
    headers: null,
  };
  try {
    const response = await AxiosInstance.request<{
      data?: T;
      errors?: FetchResponseError;
    }>(config);

    if (response.status.toString().startsWith('2')) {
      // console.log('RESPONSE : ', response.data.data);

      // @ts-ignore
      result.data = response.data;
      result.statusCode = response.status;
      result.headers = response.headers;
      return result;
    }
  } catch (err) {
    console.log(err);
    result.errors = {
      code: null,
      message: 'Something went wrong',
      errors: [
        {
          domain: 'global',
          reason: 'server',
          message: 'Something went wrong',
        },
      ],
    };
    result.errorMessage = 'Something went wrong';
  }

  console.log('API Error', result);
  return result;
};

export const fetchAction =
  <T>(config: AxiosRequestConfig): AppThunk<Promise<FetchResponse<T>>> =>
  async _dispatch => {
    const res = await fetch<T>(config);
    const {data, errors, errorMessage, statusCode, headers} = res;

    if (errors) {
      // dispatch(setErrors(errors));
    }

    return {data, errors, errorMessage, statusCode, headers};
  };
