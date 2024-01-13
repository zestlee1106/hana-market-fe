import client from ".";

export interface SignUpParams {
  email: string;
  password: string;
  nickname: string;
}

export const signUp = (params: SignUpParams) => {
  return client.post("/register", params);
};
