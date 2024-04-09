import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = Express();

app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    credentials: true,
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
