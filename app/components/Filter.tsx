"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import useModal from "../hooks/modal";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const { closeModal } = useModal();
  const [status, setStatus] = React.useState("all");
  const [name, setName] = React.useState("");
  const router = useRouter();

  const params = useSearchParams();

  React.useEffect(() => {
    const status = params.get("status");
    const name = params.get("name");

    if (status) {
      setStatus(status);
    }

    if (name) {
      setName(name);
    }
  }, []);

  const submit = () => {
    const query = {
      status,
      name,
    };

    const queryString = new URLSearchParams(query).toString();

    router.push(`?${queryString}`);

    closeModal();
  };

  return (
    <div className="min-h-[100vh] flex justify-center text-left min-w-[24rem]">
      <div className="w-full bg-base-100">
        <div className="relative left-[90%]">
          <button onClick={closeModal}>
            <XMarkIcon className="h-8 w-8 mt-2 text-white" />
          </button>
        </div>
        <div className="flex flex-col h-full mt-40">
          <div className="mx-4 mt-4">
            <div className="font-semibold text-lg">판매 상태</div>
            <div className="flex gap-2">
              <div className="form-control">
                <label className="label cursor-pointer w-20">
                  <span className="label-text">전체</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-primary"
                    checked={status === "ALL"}
                    onChange={() => setStatus("ALL")}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer w-20">
                  <span className="label-text">신규</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-primary"
                    checked={status === "NEW"}
                    onChange={() => setStatus("NEW")}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer w-20">
                  <span className="label-text">예약</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio radio-primary"
                    checked={status === "RESERVED"}
                    onChange={() => setStatus("RESERVED")}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mx-4 mt-4">
            <div className="font-semibold text-lg">상품명</div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full max-w-xs mt-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="fixed bottom-5 flex justify-center min-w-[24rem]">
          <button className="btn btn-primary" onClick={submit}>
            필터 적용
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
