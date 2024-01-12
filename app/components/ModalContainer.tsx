"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { RootState } from "../store/store";
import Dialog from "./Dialog";

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
      <div className="min-h-[100vh] flex justify-center fixed items-center w-full bg-black bg-opacity-50">
        {modals.map((modal, index) => (
          <div key={index} className={`fixed z-[${100 + index}]`}>
            <Dialog {...modal} />
          </div>
        ))}
      </div>,
      document.body // portal element
    )
  );
};

export default ModalContainer;
