import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Instructor from "./Components/Instructor";
import Courses from "./Components/Courses";
import AdminRoute from "./AdminRoute.jsx";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import Admin from "./Components/Admin.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import CreateCourse from "./Components/CreateCourse.jsx";
import AssignLecture from "./Components/AssignLecture.jsx";
import Users from "./Components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/dashboard/admin",
        element: <Admin />,
      },
      {
        path: "/createcourse",
        element: <CreateCourse />,
      },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard/instructor", element: <Instructor /> },

      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/viewusers",
        element: <Users />,
      },
      {
        path: "/assignlecture/:course_id/:instructor_id",
        element: <AssignLecture />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default Router;
