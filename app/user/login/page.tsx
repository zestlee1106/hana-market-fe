"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Login() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/user/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">로그인 하세요!</h2>
          <input
            type="text"
            placeholder="아이디"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">로그인</button>
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
