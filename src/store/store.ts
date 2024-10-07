import { configureStore } from "@reduxjs/toolkit";
import { connectedSlice } from "./connectedSlice";

export const store = configureStore({
  reducer: {
    connected: connectedSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
