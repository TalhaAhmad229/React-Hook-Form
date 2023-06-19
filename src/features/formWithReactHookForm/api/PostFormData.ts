import axios from '../../../lib/axios';
import { FORMDATA } from '../../../constant';
import { IFormTypes } from '../types/index';
import { IApiResponse } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

export const PostFormData = async (
  payload: IFormTypes,
): Promise<IApiResponse> => {
  try {
    const response: AxiosResponse = await axios.post(FORMDATA, payload);
    const { status } = response;
    return {
      status,
      success: true,
      message: 'Form data posted successfully',
    };
  } catch (error: any) {
    const { response, message }: AxiosError = error;
    return {
      status: response?.status,
      success: false,
      message,
    };
  }
};
