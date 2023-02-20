import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { experimentsApi } from "../../../routes/apiRoutes";
import { EXPERIMENTS } from "../../../reudx/actions";

export const experimentsMiddleWare = createAsyncThunk(
  EXPERIMENTS,
  async ({ _id, role }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(experimentsApi, {
        _id,
        role,
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
