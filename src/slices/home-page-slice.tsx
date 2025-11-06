/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "./../store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  continentList: [],
};

export const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {
    setContinentList: (state, action: PayloadAction<any>) => {
      state.continentList = action.payload;
    },
  },
});

export const { setContinentList } = homePageSlice.actions;

export const getContinentList = (state: RootState) =>
  state.homePageSlice.continentList;

export default homePageSlice.reducer;
