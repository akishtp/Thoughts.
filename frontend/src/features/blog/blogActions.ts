import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk("slice/type", async () => {
  try {
    const { data } = await axios.get(
      "https://akish-blogs.up.railway.app/api/blogs"
    );
    return data;
  } catch (error: any) {
    console.log("inside error", error.stack);
    // return error;
  }
});
