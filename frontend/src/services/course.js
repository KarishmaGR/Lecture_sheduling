import { COURSE_API } from "../Apis/Apis.js";
import { toast } from "react-hot-toast";
import { apiConnector } from "../Apis/ApiConnector";
import { setCourse, setLoading } from "../Slices/Courses.slice.js";

export const createCourse = (courseData, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("first", courseData);
      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const response = await apiConnector(
        "POST",
        COURSE_API.CREATE_COURSE_API,
        courseData,
        {
          "Content-Type": "multipart/form-data",
        }
      );

      if (!response) {
        throw new Error(response.message);
      }

      dispatch(setCourse(response.data.data));

      toast.success(response.data.message);
      navigate("/dashboard/admin");
    } catch (error) {
      console.log("Error in Api of course", error);
    }
    dispatch(setLoading(false));
  };
};
