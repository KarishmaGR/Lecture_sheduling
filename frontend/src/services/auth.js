import { USER_APIS } from "../Apis/Apis.js";
import { toast } from "react-hot-toast";
import {
  setsignupData,
  setLoading,
  setUser,
  setToken,
} from "../Slices/auth.Sleces.js";
import { apiConnector } from "../Apis/ApiConnector";

export const signup = (username, email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("username", username, email, password);
      const response = await apiConnector("POST", USER_APIS.SIGN_UP_API, {
        username,
        email,
        password,
      });

      if (!response) {
        throw new Error("ERROR IN SIGNUP API.....", response.error);
      }
      console.log("SignUp Response : ", response);

      // Save the token in local storage and then redirect to dashboard page

      dispatch(setsignupData(response.data.data));
      toast.success("Account Created Successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error in APi Calling", error.errors);
    }
    dispatch(setLoading(false));
  };
};
export const login = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      console.log("username", email, password);
      const response = await apiConnector("POST", USER_APIS.LOGIN_API, {
        email,
        password,
      });

      console.log("api", USER_APIS.LOGIN_API);

      if (!response) {
        throw new Error("ERROR IN LOGIN API.....", response.error);
      }
      console.log("LOGIN Response : ", response);

      dispatch(setUser(response.data.data.user));
      dispatch(setToken(response.data.data.accessToken));
      const Role = response.data.data.user.role;
      console.log("accesstokne", response.data.data.accessToken);

      localStorage.setItem(
        "token",
        JSON.stringify(response.data.data.accessToken)
      );
      console.log("user role", response.data.data.user.role);
      toast.success("Log in Successfully");
      if (Role === "admin") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/instructor");
      }
    } catch (error) {
      console.log("api", USER_APIS.LOGIN_API);
      console.log("Error in APi Calling", error);
    }
    dispatch(setLoading(false));
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(setToken(null));
      dispatch(setUser(null));
      navigate("/login");
    } catch (err) {
      console.log("LogOut Error: ", err);
    }
  };
};
