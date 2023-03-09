import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./app.initial";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHasTokens: (state, action: PayloadAction<boolean>) => {
      state.hasTokens = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;
export const appActions = actions;
export const appReducer = reducer;
