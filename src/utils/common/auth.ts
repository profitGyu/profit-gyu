import { IAuthToken } from 'types/token';

const TOKEN_KEY = 'auth_token';

export const saveToken = (token: IAuthToken): void => {
  try {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  } catch (error) {
    console.error('토큰 저장 중 오류 발생:', error);
  }
};

export const getToken = (): IAuthToken | null => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.error('토큰 불러오기 중 오류 발생:', error);
    return null;
  }
};

export const removeToken = (): void => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('토큰 삭제 중 오류 발생:', error);
  }
};

export const hasToken = (): boolean => {
  return !!getToken();
};
