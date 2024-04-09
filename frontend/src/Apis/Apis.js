const BASE_URL = "https://lecture-sheduling-backend.onrender.com/api/v1";

export const USER_APIS = {
  SIGN_UP_API: BASE_URL + "/user/createuser",
  LOGIN_API: BASE_URL + "/user/loginuser",
  LOGOUT_API: BASE_URL + "/user/logout",
  GET_ALL_USER_API: BASE_URL + "/user/alluser",
};

export const LECTURE_API = {
  CREATE_LECTURE_API: BASE_URL + "/lecture/createlecture",
};

export const GET_ALL_LECTURE_OF_INSTRUCTOR_API = {
  GETALLLECTURE_API: BASE_URL + "/instructor/getalllectures",
};

export const COURSE_API = {
  CREATE_COURSE_API: BASE_URL + "/course/createcourse",
  GET_ALL_COURSE: BASE_URL + "/course/getallcourse",
  GET_SINGLE_COURSE: BASE_URL + "/course/getsiglecourse",
};
