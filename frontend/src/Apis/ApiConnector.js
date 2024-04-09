import axios from "axios";

axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: "https://lecture-sheduling-backend.onrender.com/api/v1", // Adjust the base URL as needed
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173", // Specify the exact origin
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
