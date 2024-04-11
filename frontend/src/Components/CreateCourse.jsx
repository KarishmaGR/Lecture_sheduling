import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { setCourseData } from "../Slices/Courses.slice.js";
import { createCourse } from "../services/course.js";
const CreateCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [coursename, setcoursename] = useState("");
  const [level, setlevel] = useState("easy");
  const [description, setDescription] = useState("");
  const [image, setimage] = useState(null);
  const { courseData } = useSelector((state) => state.course);

  useEffect(() => {
    if (!courseData) {
      return navigate("/createcourse");
    }
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("coursename", coursename);
    formData.append("level", level);
    formData.append("description", description);
    formData.append("image", image);

    const courseData = {
      coursename,
      level,
      description,
      image,
    };

    //dispatch(setCourseData(courseData));
    await dispatch(createCourse(courseData, navigate));
    setcoursename("");
    setlevel("");
    setimage(null);
    setDescription("");
  };

  return (
    <>
      <section className=" mt-10 mb-10 w-[50vw] bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex  items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          ></a>
          <div className="w-full   rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700">
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                encType="multipart/form-data"
                className="  space-y-4 md:space-y-6"
                onSubmit={handleOnSubmit}
              >
                <div>
                  <label
                    htmlFor="coursename"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Course Name
                  </label>
                  <input
                    value={coursename}
                    type="text"
                    name="coursename"
                    id="coursename"
                    onChange={(e) => setcoursename(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="level"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Level
                  </label>
                  <select
                    id="level"
                    value={level}
                    name="level"
                    onChange={(e) => setlevel(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Thumbnail Image
                  </label>
                  <input
                    onChange={(e) => setimage(e.target.files[0])}
                    type="file"
                    name="image"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border-blue-900 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CreateCourse;
