import { Lecture } from "../Models/Lectures.Model.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

// foramte date in string
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
}
//create a lecture
const createLecture = asyncHandler(async (req, res) => {
  const { course_id, instructor_id } = req.params;
  const { title, date } = req.body;
  if (!course_id && !instructor_id) {
    throw new ApiError(
      409,
      "Please Provide  either Course ID and Instructor ID"
    );
  }

  const existlecture = await Lecture.findOne({ date, instructor_id });
  if (existlecture) {
    return res
      .status(300)
      .json(
        new ApiResponse(
          300,
          "Lecture Already Assign to the Instructor for the day"
        )
      );
  }

  const newlecture = await Lecture.create({
    title,
    course_id,
    instructor_id,
    date,
  });

  if (!newlecture) {
    throw new ApiError(
      500,
      "Error From server side while creating new lecture"
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Lecture Assigned Successfully", newlecture));
});

export { createLecture };
