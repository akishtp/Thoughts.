import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getBlogs = createAsyncThunk(
//   "blogs/get",
//   async ({ rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         "https://verlow-server.up.railway.app/api/records"
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );

export const getBlogs = createAsyncThunk("slice/type", async () => {
  console.log("entho run aavind");

  try {
    const { data } = await axios.get(
      "https://akish-blogs.up.railway.app/api/blogs"
    );
    console.log(data);
    return data;
  } catch (e) {
    const {
      response: { data, status },
    } = e as unknown as {
      response: { data: string; status: number };
    };
    throw {
      name: "Request Failed",
      message: data,
      code: `${status}`,
    };
  }
});
