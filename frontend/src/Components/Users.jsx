import { COURSE_API, USER_APIS } from "../Apis/Apis.js";
import { apiConnector } from "../Apis/ApiConnector.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiConnector("GET", USER_APIS.GET_ALL_USER_API);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await apiConnector("GET", COURSE_API.GET_ALL_COURSE);
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseChange = (userId, courseId) => {
    setSelectedCourses((prevSelectedCourses) => ({
      ...prevSelectedCourses,
      [userId]: courseId,
    }));
  };

  return (
    <>
      <section className="w-[100vw]  my-40 min-h-max  flex justify-center items-center bg-gray-900 ">
        <div className="relative  rounded-xl overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Assign Lecture
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr
                    key={user._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4 flex flex-col gap-3">
                      <p className="text-[1rem]">
                        Select a course to assign lecture
                      </p>
                      <select
                        onChange={(e) =>
                          handleCourseChange(user._id, e.target.value)
                        }
                        value={selectedCourses[user._id] || ""}
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course._id} value={course._id}>
                            {course.coursename}
                          </option>
                        ))}
                      </select>
                      {selectedCourses[user._id] && (
                        <>
                          <div>
                            <Link
                              to={`/assignlecture/${
                                selectedCourses[user._id]
                              }/${user._id}`}
                              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              Assign Course
                            </Link>
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Users;
