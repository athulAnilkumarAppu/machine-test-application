/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "./../store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setUserName, setPassword } = loginSlice.actions;

export const getUserName = (state: RootState) => state.loginSlice.userName;
export const getPassword = (state: RootState) => state.loginSlice.password;

export default loginSlice.reducer;
