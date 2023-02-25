import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { feedbackApi } from "../../../routes/apiRoutes";
import { FEED_BACK } from "../../../reudx/actions";

export const feedbackMiddleWare = createAsyncThunk(
  FEED_BACK,
  async ({ feedback, image, postedby, type }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(feedbackApi, {
        feedback,
        image,
        postedby,
        type,
      });
      return data;
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);
