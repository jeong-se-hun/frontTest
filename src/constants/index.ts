export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export type UserType = {
  name: string | null;
  email: string | null;
  age: string | null;
  gender: string | null;
  birthday: string | null;
};

export type InitialStateType = {
  isLoggedIn: boolean;
  user: UserType;
};
