import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { moreInfoApi } from "../../../routes/apiRoutes";
import { MORE_INFO } from "../../../reudx/actions";

export const moreInfoMiddleWare = createAsyncThunk(
  MORE_INFO,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(moreInfoApi);
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
