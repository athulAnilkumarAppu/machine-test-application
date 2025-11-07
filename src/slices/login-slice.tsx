/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "./../store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  error: "",
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setUserName, setPassword, setError } = loginSlice.actions;

export const getUserName = (state: RootState) => state.loginSlice.userName;
export const getPassword = (state: RootState) => state.loginSlice.password;
export const getError = (state: RootState) => state.loginSlice.error;

export default loginSlice.reducer;
