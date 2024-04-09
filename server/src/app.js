import Express, { Router } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = Express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Set the allowed origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // Set the allowed HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Set the allowed headers
  next();
});

app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  })
);

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
