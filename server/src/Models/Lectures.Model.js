import mongoose, { Schema } from "mongoose";

const LectureSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    course_id: {
      type: Schema.Types.ObjectId,
      ref: "course",
    },
    date: {
      type: String,
    },
    instructor_id: {
      type: Schema.Types.ObjectId,
      ref: "instructor",
    },
  },
  { timestamps: true }
);

export const Lecture = mongoose.model("lecture", LectureSchema);
