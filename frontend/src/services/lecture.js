import { LECTURE_API } from "../Apis/Apis.js";
import { toast } from "react-hot-toast";
import { apiConnector } from "../Apis/ApiConnector";
import { setLecture, setLoading } from "../Slices/Lecture.slice.js";

export const assignLecture = (date, title, courseId, userId, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        `${LECTURE_API.CREATE_LECTURE_API}/${courseId}/${userId}`,
        { title, date }
      );

      if (!response) {
        throw new Error(response.message);
      }

      dispatch(setLecture(response.data.data));

      toast.success(response.data.message);
      navigate("/dashboard/admin");
    } catch (error) {
      if (error.response && error.response.status === 300) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred In Sigin . Please try again later.");
      }
      console.log("Error in Api of course", error);
    }
    dispatch(setLoading(false));
  };
};
