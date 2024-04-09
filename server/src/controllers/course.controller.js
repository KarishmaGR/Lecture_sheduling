import { Course } from "../Models/Course.Model.js";
import { uploadonCloudinary } from "../Utils/Cloudinary.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";

//create a course
const newCourse = asyncHandler(async (req, res) => {
  const { coursename, level, description } = req.body;
  console.log("  ", coursename, level, description);
  if (!coursename || !level || !description) {
    throw new ApiError(400, "Please provide all the fields");
  }

  console.log("files", req.files);

  const imageLocalPath = req.files?.image[0]?.path;

  console.log("imagelocalpath", imageLocalPath);
  if (!imageLocalPath) {
    throw new ApiError(422, "Image is required");
  }
  //upload to cloudinary and get public_id
  let imageupload = await uploadonCloudinary(imageLocalPath);

  console.log("imageuplaod", imageupload);
  if (!imageupload?.url) {
    throw new ApiError(500, "Error while Uploading image on Cloudinary");
  }
  const newcourse = await Course.create({
    coursename,
    level,
    description,
    image: imageupload.url,
  });

  console.log("new course", newcourse);

  if (!newcourse) {
    throw new ApiError(500, "Something went wrong while creating new Course");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Course Created Successfully", newcourse));
});

//get all course
const getAllcourses = asyncHandler(async (req, res) => {
  const allcourses = await Course.find();
  return res
    .status(200)
    .json(new ApiResponse(200, "Course Fethched Successfully", allcourses));
});

// get single course
const getSingleCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  if (!courseId) {
    throw new ApiError(400, "No course ID provided");
  }

  const course = await Course.findById({ _id: courseId });
  if (!course) {
    throw new ApiError(404, "No Course Found with this ID");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Course Fetched Succssfully", course));
});
export { newCourse, getAllcourses, getSingleCourse };
