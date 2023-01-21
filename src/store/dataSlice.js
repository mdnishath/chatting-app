import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: {},
  },
  reducers: {
    storeData(state, action) {
      state.data = action.payload;
    },
  },
});
export const { storeData } = dataSlice.actions;
export default dataSlice.reducer;
