import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import News from "../../../models/news";

const URL =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4134cb55503942f6a214b1c89bfb4caa";

export const getNews = createAsyncThunk(
  "news/getNews",
  async (dispatch, thunkApi) => {
    try {
      const {
        //@ts-ignore
        data: { articles },
      } = await axios.get<News[]>(URL);
      return articles;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getNewsById = createAsyncThunk(
  "news/getNews",
  async (dispatch, thunkApi) => {
    try {
      const {
        //@ts-ignore
        data: { articles },
      } = await axios.get<News[]>(URL);
      return articles;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
