import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = Express();

app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  })
);
app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,  Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});
app.use(Express.json());
app.use(cookieParser());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.static("public"));

import UserRouter from "./Routes/user.route.js";
import CourseRouter from "./Routes/course.route.js";
import LectureRouter from "./Routes/lecture.route.js";
import InstructorRouter from "./Routes/instructor.route.js";

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/lecture", LectureRouter);
app.use("/api/v1/course", CourseRouter);
app.use("/api/v1/instructor", InstructorRouter);

dotenv.config({
  path: "./.env",
});

export { app };
