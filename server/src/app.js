import Express, { Router } from "express";
import cookieParser from "cookie-parser";

import cors from "cors";
const app = Express();
app.use(
  cors({
    origin:
      "https://lecture-sheduling-kwdnhnpjr-karishma-yadavs-projects.vercel.app",

    //origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://lecture-sheduling-kwdnhnpjr-karishma-yadavs-projects.vercel.app"
  );
  next();
});

//  "https://lecture-sheduling-gpiyft5c7-karishma-yadavs-projects.vercel.app";

app.use(Express.json());
app.use(cookieParser());
app.use(Express.urlencoded({ extended: false }));
app.use(Express.static("public"));

import UserRouter from "./Routes/user.route.js";
import CourseRouter from "./Routes/course.route.js";
import LectureRouter from "./Routes/lecture.route.js";
import InstructorRouter from "./Routes/instructor.route.js";
// app.use("/", (req, res) => {
//   res.send("Server is running");
// });
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/lecture", LectureRouter);
app.use("/api/v1/course", CourseRouter);
app.use("/api/v1/instructor", InstructorRouter);

export { app };
