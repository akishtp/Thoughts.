import { createSlice } from "@reduxjs/toolkit";
import { createBlog, getBlogs } from "./blogActions";

interface BlogState {
  blogs: any;
  loading: boolean;
  error: null | string | unknown;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.blogs = payload;
      })
      .addCase(getBlogs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.blogs = payload;
      })
      .addCase(createBlog.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default blogsSlice.reducer;
