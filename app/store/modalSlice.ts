import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal, ModalState } from "../types/modal";

const initialState: ModalState = {
  modals: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addModal: (state, action: PayloadAction<Modal>) => {
      state.modals.push(action.payload);
    },
    removeModal: (state) => {
      state.modals.pop();
    },
  },
});

export const { addModal, removeModal } = modalSlice.actions;

export default modalSlice.reducer;
