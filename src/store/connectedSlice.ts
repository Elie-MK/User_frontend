import { createSlice } from "@reduxjs/toolkit";

export const connectedSlice = createSlice({
  name: "connected",
  initialState: false,
  reducers: {
    isConnected: (state, action) => {
      console.log(state);

      return action.payload;
    },
  },
});

export const { isConnected } = connectedSlice.actions;
