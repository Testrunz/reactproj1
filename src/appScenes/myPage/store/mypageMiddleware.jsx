import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  authMeApi,
  experimentsApi,
} from "../../../routes/apiRoutes";
import { AUTH_ME, EXPERIMENTS } from "../../../reudx/actions";

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

export const authMeMiddleWare = createAsyncThunk(
  AUTH_ME,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(authMeApi);
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);

