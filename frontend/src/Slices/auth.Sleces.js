import { createSlice } from "@reduxjs/toolkit";

const initialstates = {
  user: null,
  signupData: null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  loading: false,
};

const authSlice = createSlice({
  name: "auht",
  initialState: initialstates,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setsignupData: (state, action) => {
      state.signupData = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setsignupData, setLoading, setToken, setUser } =
  authSlice.actions;

export default authSlice.reducer;
