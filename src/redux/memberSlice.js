import { createSlice } from "@reduxjs/toolkit";
const memberSlice = createSlice({
  name: "member",
  initialState: {
    currentMember: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentMember = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentMember = null;
    },
  },
});
export const { loginStart, loginSuccess, loginFailure , logOut } = memberSlice.actions;
export default memberSlice.reducer;
