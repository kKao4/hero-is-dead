import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  isOpenModal: boolean;
}

const initialState: GlobalState = {
  isOpenModal: false,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleOpenModal: (
      state,
      action: PayloadAction<(typeof initialState)["isOpenModal"]>
    ) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export const { toggleOpenModal } = globalSlice.actions;

export default globalSlice.reducer;
