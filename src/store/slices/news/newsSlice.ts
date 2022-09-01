import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNews } from "./thunks";
import News from "../../../models/news";

interface NewsState {
  page: number;
  data: News[] | null;
  isLoading: boolean;
  error: null | string;
}
const initialState = {
  page: 0,
  data: [],
  isLoading: false,
  error: "",
} as NewsState;

//Slice
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      console.log(action);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getNews.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
