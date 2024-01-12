import { useDispatch } from "react-redux";
import { addModal, removeModal } from "../store/modalSlice";
import { Modal } from "../types/modal";
import { uniqueId } from "lodash-es";

function useModal() {
  const dispatch = useDispatch();

  function openModal(modal: Modal) {
    modal.id = uniqueId();
    dispatch(addModal(modal));
  }

  function closeModal() {
    dispatch(removeModal());
  }

  return { openModal, closeModal };
}

export default useModal;
