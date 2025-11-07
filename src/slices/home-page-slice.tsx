/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "./../store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  continentList: [],
  currentIndex: 0,
  visibleCount: 10,
  menuOpen: false,
  filteredContinents: [],
  selectedFilterMenu: "All",
};

export const homePageSlice = createSlice({
  name: "homePageSlice",
  initialState,
  reducers: {
    setContinentList: (state, action: PayloadAction<any>) => {
      state.continentList = action.payload;
    },
    setCurrentIndex: (state, action: PayloadAction<any>) => {
      state.currentIndex = action.payload;
    },

    setVisibleCount: (state, action: PayloadAction<any>) => {
      state.visibleCount = action.payload;
    },

    setIsMenuOpen: (state, action: PayloadAction<any>) => {
      state.menuOpen = action.payload;
    },

    setFilteredContinents: (state, action: PayloadAction<any>) => {
      state.filteredContinents = action.payload;
    },

    setSelectedFilterMenu: (state, action: PayloadAction<any>) => {
      state.selectedFilterMenu = action.payload;
    },
  },
});

export const {
  setContinentList,
  setCurrentIndex,
  setVisibleCount,
  setIsMenuOpen,
  setFilteredContinents,
  setSelectedFilterMenu,
} = homePageSlice.actions;

export const getContinentList = (state: RootState) =>
  state.homePageSlice.continentList;
export const getCurrentIndex = (state: RootState) =>
  state.homePageSlice.currentIndex;
export const getVisibleCount = (state: RootState) =>
  state.homePageSlice.visibleCount;
export const getIsMenuOpen = (state: RootState) => state.homePageSlice.menuOpen;

export const getFilteredContinents = (state: RootState) =>
  state.homePageSlice.filteredContinents;
export const getSelectedFilterMenu = (state: RootState) =>
  state.homePageSlice.selectedFilterMenu;

export default homePageSlice.reducer;
