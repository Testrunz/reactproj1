import { createSlice } from "@reduxjs/toolkit";
import { authMeMiddleWare, experimentsMiddleWare } from "./mypageMiddleware";

const experimentsInitialState = {
  isLoading: false,
  error: "",
};

const experimentsReducer = createSlice({
  name: "experiment",
  initialState: experimentsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(experimentsMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(experimentsMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(experimentsMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

const authMeInitialState = {
  isLoading: false,
  error: "",
};

const authMeReducer = createSlice({
  name: "authMe",
  initialState: authMeInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authMeMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(authMeMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(authMeMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const experimentsReducers = experimentsReducer.reducer;
export const authMeReducers = authMeReducer.reducer;
