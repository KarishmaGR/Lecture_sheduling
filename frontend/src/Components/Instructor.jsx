import { useSelector } from "react-redux";
import { GET_ALL_LECTURE_OF_INSTRUCTOR_API } from "../Apis/Apis.js";
import { apiConnector } from "../Apis/ApiConnector.js";
import { useEffect, useState } from "react";

const Instructor = () => {
  const { user } = useSelector((state) => state.auth);
  const [lectures, setLectures] = useState([]);

  console.log("users in instrucot", user);

  useEffect(() => {
    const fetchinstrutor = async () => {
      const respons = await apiConnector(
        "GET",
        `${GET_ALL_LECTURE_OF_INSTRUCTOR_API.GETALLLECTURE_API}`
      );
      setLectures(respons.data.data);
    };

    fetchinstrutor();
  }, []);
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-900 ">
        <div className=" w-[60vw]  rounded-2xl overflow-x-auto">
          <p className=" text-xl  text-white mb-7">Assigned Lectures</p>
          <table className="w-full rounded-2xl text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className=" rounded-2xl">
                <th scope="col" className="px-6 py-3">
                  Lecture Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {lectures.map((lecture) => {
                return (
                  <tr
                    key={lecture._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {lecture.title}
                    </th>
                    <td className="px-6 py-4">{lecture.date}</td>
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
export default Instructor;
