import mongoose, { Schema } from "mongoose";

const InstructorSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    lectures: [{ type: Schema.Types.ObjectId, ref: "lecture" }],
  },
  { timestamps: true }
);

export const Instructor = mongoose.model("instructor", InstructorSchema);
