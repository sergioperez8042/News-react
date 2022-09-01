import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/news/newsSlice";

export const store = configureStore({
  reducer: newsSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
