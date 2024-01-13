"use client";

import React, { useEffect } from "react";

function SignUp() {
  const [nickname, setNickname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [error, setError] = React.useState("");

  useEffect(() => {
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("");
    }
  }, [password, passwordConfirm]);

  const isPossibleSignUp = React.useMemo(() => {
    return (
      !error && !!password && !!passwordConfirm && !!nickname && !!username
    );
  }, [password, passwordConfirm, nickname, username, error]);

  const signup = () => {};

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
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
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
