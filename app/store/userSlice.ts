import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal, ModalState } from "../types/modal";
import { UserState } from "../types/user";

const initialState: UserState = {
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
});

export const { setLogged } = userSlice.actions;

export default userSlice.reducer;
