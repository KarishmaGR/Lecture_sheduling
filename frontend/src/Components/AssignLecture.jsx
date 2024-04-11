import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assignLecture } from "../services/lecture.js";
import { useDispatch } from "react-redux";

const AssignLecture = () => {
  const dispatch = useDispatch();
  const { course_id, instructor_id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedDate = formatDate(date);
    // You can handle form submission here, e.g., send data to the server
    console.log("Form submitted:", { title, date: formattedDate });
    dispatch(
      assignLecture(formattedDate, title, course_id, instructor_id, navigate)
    );
    setTitle("");
    setDate("");
  };

  const formatDate = (selectedDate) => {
    const formattedDate = new Date(selectedDate);
    const day = String(formattedDate.getDate()).padStart(2, "0");
    const month = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = formattedDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-900">
        <div className=" w-[50vw]  px-6 py-8   rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 dark:border-gray-700 ">
          <form onSubmit={handleSubmit} className=" py-6 px-6 ">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block mt-6 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date:
              </label>
              <input
                className="bg-gray-400 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="date"
                id="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 border-blue-900 bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Assign Lecture
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default AssignLecture;
