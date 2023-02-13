import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "user",
  initialState: {
    currentAdmin: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentAdmin = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    adminLogOut: (state) => {
      state.currentAdmin = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, adminLogOut } =
  adminSlice.actions;
export default adminSlice.reducer;
