import { createSlice } from "@reduxjs/toolkit";
import { getaccessMiddleWare } from "./settingMiddleware";

const getaccessInitialState = {
  isLoading: false,
  error: "",
  data:[]
};

const getaccessReducer = createSlice({
  name: "getaccess",
  initialState: getaccessInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getaccessMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getaccessMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getaccessMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const getaccessReducers = getaccessReducer.reducer;
