"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function FloatButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleCreate = () => {
    router.push("/product/create");
  };

  return (
    pathname === "/" && (
      <div className="fixed bottom-[10%] w-full flex justify-center">
        <div className="max-w-[24rem] w-full flex justify-end">
          <button
            className="btn btn-circle btn-primary mr-3"
            onClick={handleCreate}
          >
            <PlusIcon className="h-8 w-8x" />
          </button>
        </div>
      </div>
    )
  );
}

export default FloatButton;
