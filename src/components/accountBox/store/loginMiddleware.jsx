import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { googleSignInApi, signUpApi } from "../../../routes/apiRoutes";
import { SIGIN, SIGN_IN_GOOGLE } from "../../../reudx/actions";
import { toast } from "react-toastify";

export const signUpMiddleWare = createAsyncThunk(
  SIGIN,
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
      const { data } = await axios.post(signUpApi, {
        email,
        password,
        name,
        timeZone,
      });
      if (data?.success) {
        toast.success(data?.success);
      }
      return data;
    } catch (error) {
      if (error?.response?.data?.error) {
        toast.error(error.response.data.error);
      } else if (error?.message) {
        toast.error(error?.message);
      }
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);

export const googleSignInMiddleWare = createAsyncThunk(
  SIGN_IN_GOOGLE,
  async ({ email, name, uid }, { rejectWithValue }) => {
    try {
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
      const { data } = await axios.post(googleSignInApi, {
        email,
        name,
        uid,
        timeZone,
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
