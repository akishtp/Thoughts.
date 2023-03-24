import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface SendingBlog {
  title: string;
  body: string;
}

export const getBlogs = createAsyncThunk(
  "blogs/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://akish-blogs.up.railway.app/api/blogs"
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const createBlog = createAsyncThunk(
  "blog/create",
  async (sendingBlog: SendingBlog, { rejectWithValue }) => {
    const { body, title } = sendingBlog;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://akish-blogs.up.railway.app/api/blogs",
        { title, body },
        config
      );
      console.log(data);

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
