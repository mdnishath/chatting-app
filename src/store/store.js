import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    user: userSlice,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
