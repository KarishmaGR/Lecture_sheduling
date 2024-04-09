import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lecture: null,
  loading: false,
};

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    setLecture: (state, action) => {
      state.lecture = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLecture, setLoading } = lectureSlice.actions;
export default lectureSlice.reducer;
