import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login = true;
    },
    loginSuccess: (state, action) => {
      state.login = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.login = false;
      state.error = true;
    },
    logout: (state) => {
      // return initialState;
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  videoSlice.actions;

export default videoSlice.reducer;
