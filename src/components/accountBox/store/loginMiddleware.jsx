import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginApi, validateUserApi } from "../../../routes/apiRoutes";
import { LOGIN, VALIDATE_USER } from "../../../reudx/actions";

export const loginMiddleWare = createAsyncThunk(
  LOGIN,
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(loginApi, {
        email,
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);

export const validateUserMiddleWare = createAsyncThunk(
  VALIDATE_USER,
  async ({ usertoken }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(validateUserApi, {
        usertoken,
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
