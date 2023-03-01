import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  loginApi,
  signinApi,
  validateUserApi,
} from "../../../routes/apiRoutes";
import { LOGIN, SIGIN, VALIDATE_USER } from "../../../reudx/actions";
import { toast } from "react-toastify";

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

export const signinMiddleWare = createAsyncThunk(
  SIGIN,
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(signinApi, {
        email,
        password,
        name,
      });
      if (data?.success) {
        toast.success(data?.success);
      }
      return data;
    } catch (error) {
      if (error?.response?.data?.error) {
        toast.error(error.response.data.error);
      }
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
