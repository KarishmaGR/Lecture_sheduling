import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/auth.Sleces.js";
import courseReducer from "../Slices/Courses.slice.js";
import lectureReducer from "../Slices/Lecture.slice.js";
import instructorReducer from "../Slices/Instructor.Slice.js";

const reducers = combineReducers({
  auth: authReducer,
  course: courseReducer,
  lecture: lectureReducer,
  instructor: instructorReducer,
});

export const store = configureStore({
  reducer: reducers,
});
