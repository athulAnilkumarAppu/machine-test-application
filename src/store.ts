import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/login-slice";
import homePageSlice from "./slices/home-page-slice";

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice.reducer,
    homePageSlice: homePageSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
