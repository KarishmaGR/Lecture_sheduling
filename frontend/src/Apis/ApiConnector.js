import axios from "axios";

axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: "https://lecture-sheduling-backend.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://lecture-sheduling-backend.onrender.com/api/v1",
  },
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
