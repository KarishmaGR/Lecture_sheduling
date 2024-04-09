import { Instructor } from "../Models/Instructors.Model.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { ApiError } from "../Utils/ApiError.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { User } from "../Models/User.Model.js";
import { Lecture } from "../Models/Lectures.Model.js";

// get all lecture assign to the instructor and their detail

const GetAllLectureAssignToInstruct = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(401, "User not found");
  }
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User Not Found");
  }

  const lectures = await Lecture.find({ instructor_id: user._id });
  console.log("lectures", lectures);
  if (!lectures) {
    throw new ApiError(404, "No lecture Assign to the Instructor");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Lectures Fetched Successfully", lectures));
});

export { GetAllLectureAssignToInstruct };
