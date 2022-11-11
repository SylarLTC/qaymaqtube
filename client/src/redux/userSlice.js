import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
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
  userSlice.actions;

export default userSlice.reducer;
