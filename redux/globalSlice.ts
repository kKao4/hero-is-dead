import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  isOpenModal: boolean;
  isOpenModalMenu: boolean;
}

const initialState: GlobalState = {
  isOpenModal: false,
  isOpenModalMenu: false,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleOpenModal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
    toggleOpenModalMenu: (state) => {
      state.isOpenModalMenu = !state.isOpenModalMenu;
    },
  },
});

export const { toggleOpenModal, toggleOpenModalMenu } = globalSlice.actions;
export const globalSelector = (state: RootState) => state.global;

export default globalSlice.reducer;
