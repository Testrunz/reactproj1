import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getaccessApi } from "../../../routes/apiRoutes";
import { GET_ACCESS } from "../../../reudx/actions";

export const getaccessMiddleWare = createAsyncThunk(
  GET_ACCESS,
  async ({ department, instituteName, lab, role }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(getaccessApi, {
        department,
        instituteName,
        lab,
        role,
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
