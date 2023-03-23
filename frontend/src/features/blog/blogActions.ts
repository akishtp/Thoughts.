import axios, { AxiosError } from "axios";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk("slice/type", async () => {
  try {
    const { data } = await axios.get(
      "https://akish-blogs.up.railway.app/api/blogs"
    );
    return data;
  } catch (error) {
    return error;
  }
});
