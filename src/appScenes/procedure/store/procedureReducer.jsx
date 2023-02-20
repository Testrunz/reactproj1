import { createSlice } from "@reduxjs/toolkit";
import { moreInfoMiddleWare } from "./procedureMiddleware";

const moreInfoInitialState = {
  isLoading: false,
  error: "",
};

const moreInfoReducer = createSlice({
  name: "moreInfo",
  initialState: moreInfoInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(moreInfoMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(moreInfoMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(moreInfoMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const moreInfoReducers = moreInfoReducer.reducer;
