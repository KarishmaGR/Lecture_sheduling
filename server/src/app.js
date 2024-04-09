import Express, { Router } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = Express();

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://lecture-sheduling-beta.vercel.app/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

app.use(
  cors({
    origin: ["https://lecture-sheduling-beta.vercel.app/"],
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
