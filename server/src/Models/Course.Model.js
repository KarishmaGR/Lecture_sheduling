import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema(
  {
    coursename: {
      type: String,
      lowercase: true,
      trim: true,
    },
    level: {
      type: String,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("course", CourseSchema);
