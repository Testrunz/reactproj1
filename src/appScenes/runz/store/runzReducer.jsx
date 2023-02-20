import { createSlice } from "@reduxjs/toolkit";
import { experimentsRunzMiddleWare } from "./runzMiddleware";

const experimentsRunzInitialState = {
  isLoading: false,
  error: "",
};

const experimentsRunzReducer = createSlice({
  name: "experiment_runz",
  initialState: experimentsRunzInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(experimentsRunzMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(experimentsRunzMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(experimentsRunzMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const experimentsRunzReducers = experimentsRunzReducer.reducer;
