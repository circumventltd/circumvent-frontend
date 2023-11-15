// src/redux/authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the state
interface MenuModalState {
  screentoshow: string;
  showsidebar: Boolean;
}

const initialState: MenuModalState = {
  screentoshow: "home",
  showsidebar: false,
};

const menuModalSlice = createSlice({
  name: "menumodal",
  initialState,
  reducers: {
    togglescreen: (state, action: PayloadAction<string>) => {
      state.screentoshow = action.payload;
    },
    togglesidebar: (state, action: PayloadAction<Boolean>) => {
      state.showsidebar = action.payload;
    },
  },
});

export const { togglescreen, togglesidebar } = menuModalSlice.actions;
export default menuModalSlice.reducer;
export type { MenuModalState };
