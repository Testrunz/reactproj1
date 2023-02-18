import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { experimentsRunzApi } from "../../../routes/apiRoutes";
import { EXPERIMENTS_RUNZ } from "../../../reudx/actions";

export const experimentsRunzMiddleWare = createAsyncThunk(
  EXPERIMENTS_RUNZ,
  async ({ id, role }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(experimentsRunzApi(id), {
        params: {
          role,
        },
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
