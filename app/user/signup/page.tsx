"use client";

import { signUp } from "@/app/services/user";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function SignUp() {
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [error, setError] = React.useState("");

  useEffect(() => {
    if (!password || !passwordConfirm) {
      return;
    }

    if (password.length < 8) {
      setError("비밀번호는 8자리 이상입니다.");
      return;
    }

    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
  }, [password, passwordConfirm]);

  const emailError = React.useMemo(() => {
    if (!email) {
      return "";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return "이메일 형식이 올바르지 않습니다.";
    }
    return "";
  }, [email]);

  const isPossibleSignUp = React.useMemo(() => {
    return (
      !error &&
      !emailError &&
      !!password &&
      !!passwordConfirm &&
      !!nickname &&
      !!email
    );
  }, [password, passwordConfirm, nickname, email, error]);

  const router = useRouter();

  const signup = async () => {
    try {
      await signUp({
        nickname,
        email,
        password,
      });
      router.push("/user/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">회원가입</h2>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            {emailError && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {emailError}
                </span>
              </div>
            )}
          </label>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
                !isPossibleSignUp && "btn-disabled"
              }`}
              onClick={signup}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
