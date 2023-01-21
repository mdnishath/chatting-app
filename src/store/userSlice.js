import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },

  reducers: {
    insertUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { insertUser } = userSlice.actions;
export default userSlice.reducer;
