import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: null,
  loading: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    // setCourseData: (state, action) => {
    //   state.courseData = action.payload;
    // },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCourse, setLoading, setCourseData } = courseSlice.actions;
export default courseSlice.reducer;
