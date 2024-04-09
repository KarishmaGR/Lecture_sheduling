import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instructor: null,
  loading: false,
};

const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    setInstructor: (state, action) => {
      state.instructor = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setInstructor, setLoading } = instructorSlice.actions;
export default instructorSlice.reducer;
