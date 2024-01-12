"use client";

import { ComponentType, createElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { RootState } from "../store/store";
import Dialog from "./Dialog";
import dynamic from "next/dynamic";

const components: Record<string, ComponentType> = {
  Filter: dynamic(() => import("./Filter")),
};

const ModalContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const modals = useSelector((state: RootState) => state.modal.modals);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient &&
    modals.length > 0 &&
    createPortal(
      <div className="min-h-[100vh] flex justify-center fixed items-center w-full bg-black bg-opacity-50 min-w-[24rem]">
        {modals.map((modal, index) => (
          <div key={index} className={`fixed  z-[${100 + index}]`}>
            {modal.type !== "custom" && <Dialog {...modal} />}
            {modal.type === "custom" &&
              components[modal.componentName || ""] && (
                <div>
                  {createElement(components[modal.componentName || ""])}
                </div>
              )}
          </div>
        ))}
      </div>,
      document.body
    )
  );
};

export default ModalContainer;
