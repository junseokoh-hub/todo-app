import axios, { AxiosResponse } from 'axios';
import { AuthData } from 'components/auth/types/auth.types';
import { LoginResponseType } from './auth.type';

const baseURL = 'https://pre-onboarding-selection-task.shop';

export const authClient = axios.create({
  baseURL: `${baseURL}/auth/`,
});

export function requestLogin(body: AuthData): Promise<{ token: string }> {
  // TODO : 에러처리
  return authClient.post('signin', body).then((res: AxiosResponse<LoginResponseType>) => {
    const { token } = res.data;
    return new Promise((res, rej) => res({ token }));
  });
}

export function signup(body: AuthData) {
  return authClient.post('signup', body).then((res: AxiosResponse<any>) => {
    return new Promise((res, rej) => res('ok'));
  });
}
