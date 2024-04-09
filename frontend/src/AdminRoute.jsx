import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  if (!user) {
    // Redirect to login page or render loading indicator
    return <Navigate to="/login" />;
  }
  return user.role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
