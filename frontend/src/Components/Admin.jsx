import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <section className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-900 ">
        <div className="flex   justify-around w-full items-center ">
          <Link
            to="/createcourse"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CreateCourse
          </Link>

          <Link
            to="/viewusers"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Users
          </Link>
        </div>
      </section>
    </>
  );
};
export default Admin;
