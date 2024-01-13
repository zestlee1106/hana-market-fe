"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { login as fetchLogin } from "@/app/services/user";
import { useDispatch } from "react-redux";
import { setLogged } from "@/app/store/userSlice";

function Login() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/user/signup");
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isPossibleLogin = React.useMemo(() => {
    return email !== "" && password !== "";
  }, [email, password]);

  const [error, setError] = React.useState("");

  const dispatch = useDispatch();

  const login = async () => {
    try {
      await fetchLogin({ email, password });
      dispatch(setLogged(true));
      // TODO: 로그인 성공 시 처리
    } catch (e) {
      // @ts-ignore
      if (e?.response?.data?.data?.message) {
        // @ts-ignore
        setError(e.response.data.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">로그인 하세요!</h2>
          <input
            type="text"
            placeholder="아이디"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            {error && (
              <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
              </div>
            )}
          </label>
          <div className="card-actions justify-end">
            <button
              className={`btn btn-primary ${
                !isPossibleLogin && "btn-disabled"
              }`}
              onClick={login}
            >
              로그인
            </button>
            <button
              className="btn btn-outline btn-secondary"
              onClick={handleSignUp}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
