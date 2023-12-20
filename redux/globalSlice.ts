import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  isOpenModal: boolean;
  isOpenModalMenu: boolean;
  activePage:
    | "home"
    | "news"
    | "on-air"
    | "story"
    | "staff-and-cast"
    | "character"
    | "product"
    | "special";
}

const initialState: GlobalState = {
  isOpenModal: false,
  isOpenModalMenu: false,
  activePage: "home",
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
    setActivePage: (
      state,
      action: PayloadAction<GlobalState["activePage"]>
    ) => {
      state.activePage = action.payload;
    },
  },
});

export const { toggleOpenModal, toggleOpenModalMenu, setActivePage } = globalSlice.actions;
export const globalSelector = (state: RootState) => state.global;

export default globalSlice.reducer;
