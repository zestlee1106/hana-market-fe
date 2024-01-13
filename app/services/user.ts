import client from ".";

export interface SignUpParams {
  email: string;
  password: string;
  nickname: string;
}

export const signUp = (params: SignUpParams) => {
  return client.post("/register", params);
};

export interface LoginParams {
  email: string;
  password: string;
}

export const login = (params: LoginParams) => {
  return client.post("/login", params);
};
